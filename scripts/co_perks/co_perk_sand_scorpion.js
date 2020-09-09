var Constructor = function()
{
    this.getOffensiveBonus = function(co, attacker, atkPosX, atkPosY,
                                 defender, defPosX, defPosY, isDefender)
    {
		if (CO_PERK.isActive(co))
		{
			if (typeof map !== 'undefined')
			{
				if (map.getGameRules().getCurrentWeather().getWeatherId() === "WEATHER_SANDSTORM")
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
        return "Increases the attack of units by 20% during sandstorm.";
    };
    this.getIcon = function()
    {
        return "WEATHERSAND";
    };
    this.getName = function()
    {
        return "Sandstorm: +20% Atk";
    };
	this.isSelectable = function(){
		return false;
	}
};

Constructor.prototype = CO_PERK;
var CO_PERK_SAND_SCORPION = new Constructor();
