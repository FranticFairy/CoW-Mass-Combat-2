var Constructor = function()
{
    // called for loading the main sprite
    this.loadSprites = function(building, neutral)
    {
        var buildingID = building.getBuildingID().toLowerCase();
        building.loadSprite(buildingID, false);
        if (building.getOwnerID() >= 0 && !neutral)
        {
            // none neutral player
            building.loadSpriteV2(buildingID + "+mask", GameEnums.Recoloring_Table);
        }
    };
    this.getBaseIncome = function()
    {
        return 0;
    };
    this.startOfTurn = function(building)
    {
    };
    this.getDefense = function()
    {
        return 2;
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
        return qsTr("Anti-Tank Ditch");
    };

    this.getDescription = function()
    {
        return qsTr("An anti-tank ditch. Provides cover, but is primarily used for stopping vehicles.");
    };
}

Constructor.prototype = BUILDING;
var TANKDITCH = new Constructor();
