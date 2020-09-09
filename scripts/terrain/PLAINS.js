PLAINS.loadBaseSprite = function (terrain) {
    var weatherTerrain = "plains";
    if (typeof map !== 'undefined') {
        var currentWeather = map.getGameRules().getCurrentWeather();
        if (currentWeather !== null) {
            if (map.getGameRules().getCurrentWeather().getWeatherId() === "WEATHER_SNOW") {
                weatherTerrain = "snow";
            } else if (map.getGameRules().getCurrentWeather().getWeatherId() === "WEATHER_SANDSTORM") {
                weatherTerrain = "desert";
            }
        }
    }
    terrain.loadBaseSprite(weatherTerrain);

};
PLAINS.loadOverlaySprite = function (terrain) {

};
PLAINS.init = function (terrain) {
    terrain.setTerrainName(PLAINS.getName());
    terrain.setVisionHigh(0);
};