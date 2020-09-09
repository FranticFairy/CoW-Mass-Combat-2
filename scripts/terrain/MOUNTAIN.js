MOUNTAIN.loadBaseSprite = function(terrain)
{
    var weatherTerrain = "mountain";
    if (typeof map !== 'undefined') {
        var currentWeather = map.getGameRules().getCurrentWeather();
        if (currentWeather !== null) {
            if (map.getGameRules().getCurrentWeather().getWeatherId() === "WEATHER_SNOW") {
                weatherTerrain = "snow_mountain";
            } else if (map.getGameRules().getCurrentWeather().getWeatherId() === "WEATHER_SANDSTORM") {
                weatherTerrain = "desert_rock";
            }
        }
    }
    terrain.loadBaseSprite(weatherTerrain);
};
MOUNTAIN.init = function (terrain)
{
    terrain.setVisionHigh(3);
    terrain.setTerrainName(MOUNTAIN.getName());
};
MOUNTAIN.loadBaseTerrain = function(terrain, currentTerrainID)
{
    terrain.loadBaseTerrain("PLAINS");
};
MOUNTAIN.getBonusVision = function(unit)
{
    var infantry = ["FAI_IFV","FAI_IFV_AMPHI","FAI_SUPP_RECON","FAI_SUPP_SECURITY","FAI_TRANS_TRUCK","FAI_TRANS_HALFT","FAI_TRANS_AMPHI"];
    if (infantry.indexOf(unit.getUnitID()) >= 0)
    {
        return 1;
    }
    else
    {
        return 0;
    }
};
MOUNTAIN.loadOverlaySprite = function (terrain) {
    var surroundings = terrain.getSurroundings("MOUNTAIN", false, false, GameEnums.Directions_East, false);
    surroundings += terrain.getSurroundings("MOUNTAIN", false, false, GameEnums.Directions_West, false);
};