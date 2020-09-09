var Constructor = function()
{
    this.getMaxUnitCount = function()
    {
        return 1;
    };

    this.loadStandingAnimation = function(sprite, unit, defender, weapon)
    {
        var player = unit.getOwner();
        var armyName = player.getArmy().toLowerCase();

        var identifier = "";
        var unitID = unit.getUnitID().toLowerCase();
        GameConsole.print(BATTLEANIMATION.getMaxUnitCount(),1);
        sprite.loadSprite(unitID + identifier,  false, BATTLEANIMATION.getMaxUnitCount(), Qt.point(0, 0));
        sprite.loadSpriteV2(unitID + identifier + "+mask",  GameEnums.Recoloring_Table, BATTLEANIMATION.getMaxUnitCount(), Qt.point(0, 0));
        
        // var terrainType = "";
        // var terrain = unit.getTerrain();
        // if(terrain != null) {
        //     terrainType = terrain.getTerrainID();
        //     GameConsole.print(terrainType,1);
        //     sprite.loadSprite(terrainType, false, 1, Qt.point(30, 30));
        // }

    };

    this.loadFireAnimation = function(sprite, unit, defender, weapon)
    {
        BATTLEANIMATION_FAI_IFV.loadStandingAnimation(sprite, unit, defender, weapon);
    };

    this.getFireDurationMS = function()
    {
        // the time will be scaled with animation speed inside the engine
        return 500;
    };
};

Constructor.prototype = BATTLEANIMATION;
var BATTLEANIMATION_FAI_IFV = new Constructor();
