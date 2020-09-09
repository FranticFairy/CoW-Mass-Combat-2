FOREST.loadBaseSprite = function (terrain) {
    var weatherTerrain = "forest";
    if (typeof map !== 'undefined') {
        var currentWeather = map.getGameRules().getCurrentWeather();
        if (currentWeather !== null) {
            if (map.getGameRules().getCurrentWeather().getWeatherId() === "WEATHER_SNOW") {
                weatherTerrain = "snow_forest";
            } else if (map.getGameRules().getCurrentWeather().getWeatherId() === "WEATHER_SANDSTORM") {
                weatherTerrain = "desert_forest";
            }
        }
    }
    terrain.loadBaseSprite(weatherTerrain);
};
FOREST.init = function (terrain) {
    terrain.setVisionHigh(1);
    terrain.setTerrainName(FOREST.getName());
};