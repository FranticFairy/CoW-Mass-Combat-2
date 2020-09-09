var Constructor = function()
{
    // called for loading the main sprite
    this.canBePerformed = function(action)
    {
        var unit = action.getTargetUnit();
        var actionTargetField = action.getActionTarget();
        var targetField = action.getTarget();

        if ((unit.getHasMoved() === true))
        {
            return false;
        }
        if ((actionTargetField.x === targetField.x) && (actionTargetField.y === targetField.y) ||
                (action.getMovementTarget() === null))
        {
            if (ACTION_PLACE_CLEAR.getForestFields(action).length > 0)
            {
                return true;
            }
        }
        return false;
    };
    this.getForestFields = function(action)
    {
        var targetField = action.getActionTarget();
        var targetFields = [Qt.point(targetField.x + 1, targetField.y),
                            Qt.point(targetField.x - 1, targetField.y),
                            Qt.point(targetField.x,     targetField.y - 1),
                            Qt.point(targetField.x,     targetField.y + 1)];
        var unit = action.getTargetUnit();
        var targetTerrain = map.getTerrain(targetField.x, targetField.y);
        var ret = [];
        // check all neighbour terrains
        for (var i = 0; i < targetFields.length; i++)
        {
            if (map.onMap(targetFields[i].x, targetFields[i].y))
            {
                var terrain = map.getTerrain(targetFields[i].x, targetFields[i].y);
                var defUnit = terrain.getUnit();
                // can the transported unit move over the terrain?
                if ((defUnit === null) && (terrain.getTerrainID() == "DESERT_FOREST" || terrain.getTerrainID() == "FOREST" || terrain.getTerrainID() == "SNOW_FOREST"))
                {
                    ret.push(targetFields[i]);
                }
            }
        }
        return ret;
    };

    this.getActionText = function()
    {
        return qsTr("Clear Forest");
    };
    this.getIcon = function()
    {
        return "build";
    };
    this.isFinalStep = function(action)
    {
        if (action.getInputStep() === 1)
        {
            return true;
        }
        else
        {
            return false;
        }
    };

    this.getStepInputType = function(action)
    {        
        return "FIELD";
    };

    this.getStepData = function(action, data)
    {
        var unit = action.getTargetUnit();
        var actionTargetField = action.getActionTarget();
        data.setColor("#C800FF00");
        var fields = ACTION_PLACE_CLEAR.getForestFields(action);
        for (var i3 = 0; i3 < fields.length; i3++)
        {
            data.addPoint(Qt.point(fields[i3].x, fields[i3].y));
        }
    };

    this.postAnimationPontoonPosX = -1;
    this.postAnimationPontoonPosY = -1;
    this.perform = function(action)
    {
        // we need to move the unit to the target position
        var unit = action.getTargetUnit();
        var animation = Global[unit.getUnitID()].doWalkingAnimation(action);
        animation.setEndOfAnimationCall("ACTION_PLACE_CLEAR", "performPostAnimation");
        // move unit to target position
        unit.moveUnitAction(action);
        // disable unit commandments for this turn
        action.startReading();
        unit.setHasMoved(true);
        var x = action.readDataInt32();
        var y = action.readDataInt32();
        ACTION_PLACE_CLEAR.postAnimationPontoonPosX = x;
        ACTION_PLACE_CLEAR.postAnimationPontoonPosY = y;
        
    };
    this.performPostAnimation = function(postAnimation)
    {
        // unloading the units here :)
        var player = map.getCurrentPlayer();
        var replaceTerrain = map.getTerrain(ACTION_PLACE_CLEAR.postAnimationPontoonPosX, ACTION_PLACE_CLEAR.postAnimationPontoonPosY).getBaseTerrainID();
        //terrain.getBaseTerrainID()
        map.replaceTerrain(replaceTerrain, ACTION_PLACE_CLEAR.postAnimationPontoonPosX, ACTION_PLACE_CLEAR.postAnimationPontoonPosY);
        ACTION_TERRAIN_LOADSPRITES.perform(ACTION_PLACE_CLEAR.postAnimationPontoonPosX,ACTION_PLACE_CLEAR.postAnimationPontoonPosY);
        
        audio.playSound("unload.wav");
        ACTION_PLACE_CLEAR.postAnimationPontoonPosX = -1;
        ACTION_PLACE_CLEAR.postAnimationPontoonPosY = -1;
    };
}

Constructor.prototype = ACTION;
var ACTION_PLACE_CLEAR = new Constructor();
