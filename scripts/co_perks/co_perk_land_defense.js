var Constructor = function()
{
    this.getDeffensiveBonus = function(co, attacker, atkPosX, atkPosY,
                                       defender, defPosX, defPosY, isDefender)
    {
		if (CO_PERK.isActive(co))
		{
            var unitType = defender.getUnitType();
            unitType = UNIT.unitTypeToGround(unitType);
			if (unitType == GameEnums.UnitType_Ground)
			{
				return 5;
			}
		}
        return 0;
    };
	// Perk - Intel
    this.getDescription = function()
    {
        return "Increases defense of land units by 5%.";
    };
    this.getIcon = function()
    {
        return "LANDDEF";
    };
    this.getName = function()
    {
        return "Land Def. +5%";
    };
};

Constructor.prototype = CO_PERK;
var CO_PERK_LAND_DEFENSE = new Constructor();
