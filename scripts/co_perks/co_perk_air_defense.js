var Constructor = function()
{
    this.getDeffensiveBonus = function(co, attacker, atkPosX, atkPosY,
                                       defender, defPosX, defPosY, isDefender)
    {
		if (CO_PERK.isActive(co))
		{
            var unitType = defender.getUnitType();
            unitType = UNIT.unitTypeToGround(unitType);
			if (unitType == GameEnums.UnitType_Air)
			{
				return 10;
			}
		}
        return 0;
    };
	// Perk - Intel
    this.getDescription = function()
    {
        return "Increases defense of air units by 10%.";
    };
    this.getIcon = function()
    {
        return "AIRDEF";
    };
    this.getName = function()
    {
        return "Air Def. +10%";
    };
};

Constructor.prototype = CO_PERK;
var CO_PERK_AIR_DEFENSE = new Constructor();
