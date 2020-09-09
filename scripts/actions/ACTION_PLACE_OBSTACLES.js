var Constructor = function () {
    // called for loading the main sprite
    this.canBePerformed = function (action) {
        var unit = action.getTargetUnit();
        var actionTargetField = action.getActionTarget();
        var targetField = action.getTarget();

        if ((unit.getHasMoved() === true) ||
        (unit.getOwner().getFunds() < 1000)
        )
        {
            return false;
        }
        if ((actionTargetField.x === targetField.x) && (actionTargetField.y === targetField.y) ||
                (action.getMovementTarget() === null))
        {
            if (ACTION_PLACE_OBSTACLES.getTargetFields(action).length > 0)
            {
                GameConsole.print("Happens", 1);

                return true;
            }
        }
        return false;
    };

    this.getTargetFields = function(action)
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
                var defBuilding = terrain.getBuilding();
                // can the transported unit move over the terrain?
                if ((defUnit === null) && defBuilding === null)
                {
                    if(terrain.getTerrainID() == "PLAINS" || terrain.getTerrainID() == "SNOW" || terrain.getTerrainID() == "DESERT") {
                        ret.push(targetFields[i]);
                    }
                }
            }
        }
        return ret;
    };

    this.getActionText = function () {
        return qsTr("Build Obstacle");
    };
    this.getIcon = function () {
        return "build";
    };

    this.isFinalStep = function (action) {
        if (action.getInputStep() === 0) {
            return false;
        }
        else {
            return true;
        }
    };
    

    this.getStepInputType = function (action) {
        // supported types are MENU and FIELD
        if (action.getInputStep() === 0) {
            return "MENU";
        }
        return "";
    };

    this.getStepData = function (action, data) {
        var building = action.getTargetBuilding();
        var types = ["TankDitch","TankTraps","Trench"];
        
        var funds = map.getCurrentPlayer().getFunds();
        for (i = 0; i < types.length; i++) {
            var name = types[i];
            var costs = 1000;
            var enabled = false;
            if (costs <= funds) {
                enabled = true;
            }
            data.addData(name + " " + costs.toString(),types[i],"FAI_UTIL_ACTIONDOZER", costs, enabled);
        }
    };


    this.perform = function (action) {
        action.startReading();
        var unit = action.getTargetUnit();
        // var player = map.getCurrentPlayer();
        // var building = action.getTargetBuilding();
        var x = unit.getX();
        var y = unit.getY();
        var buildingID = action.readDataString();

        unit.moveUnitAction(action);

        map.getCurrentPlayer().addFunds(-action.getCosts());

        var terrain = map.getTerrain(x, y);
        terrain.loadBuilding(buildingID.toUpperCase());
        terrain.getBuilding().setUnitOwner(unit);
        unit.setHasMoved(true);
    };
}

Constructor.prototype = ACTION;
var ACTION_PLACE_OBSTACLES = new Constructor();
