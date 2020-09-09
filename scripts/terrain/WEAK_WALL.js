
WEAK_WALL.init = function (terrain)
{
    terrain.setVisionHigh(2);
    terrain.setTerrainName(WEAK_WALL.getName());
    terrain.setHp(100);
};
WEAK_WALL.getTerrainAnimationForeground = function(unit, terrain)
{
    return "fore_wall";
};