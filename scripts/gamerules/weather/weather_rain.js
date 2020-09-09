WEATHER_RAIN.activate = function(weather)
{
    var variable = weather.getVariables().createVariable("FOGMODE");
    var fogMode = map.getGameRules().getFogMode();
    variable.writeDataInt32(fogMode);
    // only apply fog of war if the fog rules are softer
    if (fogMode < GameEnums.Fog_OfWar)
    {
        map.getGameRules().setFogMode(GameEnums.Fog_OfWar);
    }
    audio.playSound("rain.wav");
    if(typeof map !== 'undefined') { 
        map.updateSprites();
    }
};