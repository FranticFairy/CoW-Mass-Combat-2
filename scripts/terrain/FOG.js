FOG.loadBaseSprite = function(terrain)
{
    terrain.loadBaseSprite("fog");   
};
FOG.init = function (terrain)
{
    terrain.setTerrainName(FOG.getName());
    terrain.setVisionHigh(3);
};