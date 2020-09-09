var Constructor = function()
{
    this.getMovementpointModifier = function(co, unit, posX, posY)
    {
		if (CO_PERK.isActive(co))
		{
            var unitType = unit.getUnitType();
            unitType = UNIT.unitTypeToGround(unitType);
			if (unitType == GameEnums.UnitType_Air)
			{
				return 1;
			}
		}
        return 0;
    };
	// Perk - Intel
    this.getDescription = function()
    {
        return "Increases move of air units by 1.";
    };
    this.getIcon = function()
    {
        return "AIRMOVE";
    };
    this.getName = function()
    {
        return "Air Move +1";
    };
};

Constructor.prototype = CO_PERK;
var CO_PERK_AIR_MOVE = new Constructor();
