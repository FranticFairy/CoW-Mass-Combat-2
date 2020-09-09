var Constructor = function()
{
    this.init = function (building, neutral)
    {
        var variables = building.getVariables();
        var integrity = variables.createVariable("INTEGRITY");
        integrity.writeDataInt32(4);
    };
    // called for loading the main sprite
    this.loadSprites = function(building, neutral)
    {
        var buildingID = building.getBuildingID().toLowerCase();
        if (building.getOwnerID() >= 0 && !neutral)
        {
            // none neutral player
            building.loadSprite(buildingID, false);
            building.loadSpriteV2(buildingID + "+mask", GameEnums.Recoloring_Table);
        }
        else
        {
            // neutral player
            building.loadSprite(buildingID + "+neutral", false);
        }
    };
    this.getBaseIncome = function()
    {
        return 0;
    };
    this.startOfTurn = function(building)
    {
        var variables = building.getVariables();
        var integrity = variables.getVariable("INTEGRITY");
        var value = integrity.readDataInt32();
        if (building.getOwnerID() >= 0)
        {
            var terrain = map.getTerrain(building.getX(), building.getY());
            var unit = terrain.getUnit();
            if(unit != undefined) {
                value = 3;
                building.setOwner(unit.getOwner());
            } else {
                value = value - 1;
                if(value <= 0) {
                    terrain.removeBuilding();
                }
            }
        }
        integrity.writeDataInt32(value);


    };
    this.getDefense = function()
    {
        return 3;
    };
    this.getMiniMapIcon = function()
    {
        return "minimap_obstacle";
    };

    this.getTerrainAnimationForeground = function(unit, terrain)
    {
        return "fore_desertriver";
    };

    this.getTerrainAnimationBackground = function(unit, terrain)
    {
        return "back_plains";
    };

    this.getName = function()
    {
        return qsTr("Trenches");
    };

    this.getDescription = function()
    {
        return qsTr("A trench system, providing a great defensive bonus while being tough to traverse.");
    };
}

Constructor.prototype = BUILDING;
var TRENCH = new Constructor();
