WASTELAND.loadBaseSprite = function(terrain)
{
    terrain.loadBaseSprite("wasteland");   
};

WASTELAND.init = function (terrain)
{
    terrain.setVisionHigh(0);
    terrain.setTerrainName(WASTELAND.getName());
};