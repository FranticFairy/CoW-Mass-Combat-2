var Constructor = function()
{
    this.getDeffensiveBonus = function(co, attacker, atkPosX, atkPosY,
                                       defender, defPosX, defPosY, isDefender)
    {
		if (CO_PERK.isActive(co))
		{
            var unitType = defender.getUnitType();
			if (unitType == GameEnums.UnitType_Helicopter)
			{
				return 15;
			}
		}
        return 0;
    };
	// Perk - Intel
    this.getDescription = function()
    {
        return "Increases defense of helicopter units by 15%.";
    };
    this.getIcon = function()
    {
        return "HELIDEF";
    };
    this.getName = function()
    {
        return "Heli Def. +15%";
    };
};

Constructor.prototype = CO_PERK;
var CO_PERK_HELI_DEFENSE = new Constructor();
