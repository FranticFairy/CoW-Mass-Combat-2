var Constructor = function()
{
    this.getOffensiveBonus = function(co, attacker, atkPosX, atkPosY,
                                 defender, defPosX, defPosY, isDefender)
    {
		if (CO_PERK.isActive(co))
		{
			if (typeof map !== 'undefined')
			{
				if (map.getGameRules().getCurrentWeather().getWeatherId() === "WEATHER_SNOW")
                {
					return 20;
				}
			}
		}
        return 0;
    };
	// Perk - Intel
    this.getDescription = function()
    {
        return "Increases the attack of units by 20% during snow.";
    };
    this.getIcon = function()
    {
        return "WEATHERSNOW";
    };
    this.getName = function()
    {
        return "Snowstorm: +20% Atk";
    };
	this.isSelectable = function(){
		return false;
	}
};

Constructor.prototype = CO_PERK;
var CO_PERK_ICEBREAKER = new Constructor();
