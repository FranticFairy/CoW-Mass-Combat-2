ROUGH_SEA.loadBaseSprite = function(terrain)
{
    terrain.loadBaseSprite("rough_sea");   
};

ROUGH_SEA.init = function (terrain)
{
    terrain.setVisionHigh(0);
    terrain.setTerrainName(ROUGH_SEA.getName());
};