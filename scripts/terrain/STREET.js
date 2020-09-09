STREET.loadBaseSprite = function(terrain)
{
    var surroundings = terrain.getSurroundings("STREET,RAILCROSS,BRIDGE,DESERT_PATH,TELEPORTTILE,AIRPORT,FACTORY,HARBOUR,HQ,LABOR,STATION,TOWN,URBAN,RUIN,MINE,TOWER,BUILDSITE",
                                               false, false, GameEnums.Directions_Direct, true, true);
    terrain.loadBaseSprite("street" + surroundings);
};

STREET.init = function (terrain)
{
    terrain.setVisionHigh(0);
    terrain.setTerrainName(STREET.getName());
};