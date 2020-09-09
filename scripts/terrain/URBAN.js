var Constructor = function()
{
    this.getTerrainGroup = function()
    {
        return 1;
    };
    // loader for stuff which needs C++ Support
    this.init = function (terrain)
    {
        terrain.setTerrainName(URBAN.getName());
        terrain.setVisionHigh(0);
    };
    this.getName = function()
    {
        return qsTr("Urban");
    };
    this.getDefense = function()
    {
        return 3;
    };
    this.loadBaseTerrain = function(terrain, currentTerrainID)
    {
        if (currentTerrainID === "SNOW")
        {
            terrain.loadBaseTerrain("SNOW");
        }
        else if (currentTerrainID === "DESERT")
        {
            terrain.loadBaseTerrain("DESERT");
        }
        else
        {
            terrain.loadBaseTerrain("PLAINS");
        }
    };
    this.loadBaseSprite = function(terrain)
    {
        var surroundings = terrain.getSurroundings("URBAN,STREET,BRIDGE,STATION,TOWN,HQ,FACTORY,AIRPORT,HARBOUR,STATION",
                                                   false, false, GameEnums.Directions_Direct, true, true);
        surroundings = ""; //Remove for 32x32
        terrain.loadBaseSprite("urban" + surroundings);
    };
    this.getMiniMapIcon = function()
    {
        return "minimap_building";
    };
    this.getTerrainAnimationForeground = function(unit, terrain)
    {
        return "fore_town";
    };
    this.getTerrainAnimationBackground = function(unit, terrain)
    {
        return "back_town";
    };
    this.getDescription = function()
    {
        return "<r>" + qsTr("Urban area too sparesly populated to make money") + "</r>";
    };
    this.getTerrainSprites = function()
    {
        // array of sprites that can be selected as fix sprites for this terrain
        return ["urban.png"];
    };
};
Constructor.prototype = TERRAIN;
var URBAN = new Constructor();
