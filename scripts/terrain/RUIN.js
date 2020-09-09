RUIN.loadBaseSprite = function(terrain)
{
    terrain.loadBaseSprite("ruin");   
};

RUIN.init = function (terrain)
{
    terrain.setVisionHigh(1);
    terrain.setTerrainName(RUIN.getName());
};