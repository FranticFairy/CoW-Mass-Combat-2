var Constructor = function()
{
    this.getDeffensiveBonus = function(co, attacker, atkPosX, atkPosY,
                                       defender, defPosX, defPosY, isDefender)
    {
		if (CO_PERK.isActive(co))
		{
            var unitType = attacker.getUnitType();
			if (unitType == GameEnums.UnitType_Infantry)
			{
				return 15;
			}
		}
        return 0;
    };
	// Perk - Intel
    this.getDescription = function()
    {
        return "Increases defense of infantry units by 15%.";
    };
    this.getIcon = function()
    {
        return "IFVDEF";
    };
    this.getName = function()
    {
        return "Infantry Def. +15%";
    };
};

Constructor.prototype = CO_PERK;
var CO_PERK_IFV_DEFENSE = new Constructor();
