
WALL.init = function (terrain)
{
    terrain.setVisionHigh(2);
    terrain.setTerrainName(WALL.getName());
};
WALL.getTerrainAnimationForeground = function(unit, terrain)
{
    return "fore_wall";
};