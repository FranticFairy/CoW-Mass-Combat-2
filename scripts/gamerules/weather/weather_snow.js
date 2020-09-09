WEATHER_SNOW.activate = function(weather)
{
    audio.playSound("snow.wav");
    if(typeof map !== 'undefined') { 
        map.updateSprites();
    }
};