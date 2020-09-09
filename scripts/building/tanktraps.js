var Constructor = function()
{
    this.init = function (building, neutral)
    {
        building.setHp(25);
        building.setAlwaysVisble(true);
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
    this.getDefense = function()
    {
        return 1;
    };
    this.getMiniMapIcon = function()
    {
        return "minimap_obstacle";
    };

    this.getTerrainAnimationForeground = function(unit, terrain)
    {
        return "fore_plains";
    };

    this.getTerrainAnimationBackground = function(unit, terrain)
    {
        return "back_plains";
    };

    this.getName = function()
    {
        return qsTr("Tank Traps");
    };

    this.getDescription = function()
    {
        return qsTr("Tank traps provide very little cover, but are good at slowing down incoming vehicles.");
    };
    this.onDestroyed = function(building)
    {
        // called when the terrain is destroyed and replacing of this terrain starts
        var x = building.getX();
        var y = building.getY();
        var terrain = map.getTerrain(x, y);
        map.replaceTerrain(terrain.getBaseTerrainID(), x, y);
        map.getTerrain(x, y).loadSprites();
        var animation = GameAnimationFactory.createAnimation(x, y);
        animation.addSprite("explosion+land", -map.getImageSize() / 2, -map.getImageSize(), 0, 1.5);
        audio.playSound("explosion+land.wav");
    };
}

Constructor.prototype = BUILDING;
var TANKTRAPS = new Constructor();
