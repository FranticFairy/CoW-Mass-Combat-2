WEATHER_SANDSTORM.activate = function(weather)
{
    if(typeof map !== 'undefined') { 
        map.updateSprites();
    }
};