TELEPORTTILE.loadBaseSprite = function(terrain)
{
    terrain.loadBaseSprite("teleporttile");   
};

TELEPORTTILE.init = function (terrain)
{
    terrain.setVisionHigh(999);
    terrain.setTerrainName(TELEPORTTILE.getName());
};