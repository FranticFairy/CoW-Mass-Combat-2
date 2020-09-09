var Constructor = function()
{
    this.getOffensiveBonus = function(co, attacker, atkPosX, atkPosY,
                                       defender, defPosX, defPosY, isDefender)
    {
		if (CO_PERK.isActive(co))
		{
            var unitType = attacker.getUnitType();
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
        return "Increases attack of land units by 5%.";
    };
    this.getIcon = function()
    {
        return "LANDATK";
    };
    this.getName = function()
    {
        return "Land Atk. +5%";
    };
};

Constructor.prototype = CO_PERK;
var CO_PERK_LAND_ATTACK = new Constructor();
