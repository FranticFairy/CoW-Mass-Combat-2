DESERT_DESTROYEDWELD.getTerrainAnimationForeground = function(unit, terrain)
{
    return "fore_desertrock";
};
DESERT_DESTROYEDWELD.getTerrainAnimationBackground = function(unit, terrain)
{
    return "back_desert";
};

DESERT_DESTROYEDWELD.init = function (terrain)
{
    terrain.setTerrainName(DESERT_DESTROYEDWELD.getName());
    terrain.setVisionHigh(0);
};