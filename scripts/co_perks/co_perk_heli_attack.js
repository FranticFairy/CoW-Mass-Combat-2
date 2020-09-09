var Constructor = function()
{
    this.getOffensiveBonus = function(co, attacker, atkPosX, atkPosY,
                                       defender, defPosX, defPosY, isDefender)
    {
		if (CO_PERK.isActive(co))
		{
            var unitType = attacker.getUnitType();
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
        return "Increases attack of helicopter units by 15%.";
    };
    this.getIcon = function()
    {
        return "HELIATK";
    };
    this.getName = function()
    {
        return "Heli Atk. +15%";
    };
};

Constructor.prototype = CO_PERK;
var CO_PERK_HELI_ATTACK = new Constructor();
