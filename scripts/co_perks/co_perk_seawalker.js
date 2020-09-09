var Constructor = function()
{
    this.getMovementpointModifier = function(co, unit, posX, posY)
    {
		if (CO_PERK.isActive(co))
		{
            var unitType = unit.getUnitType();
            unitType = UNIT.unitTypeToGround(unitType);
			if (unitType == GameEnums.UnitType_Naval)
			{
				return 1;
			}
		}
        return 0;
    };
	// Perk - Intel
    this.getDescription = function()
    {
        return "Increases move of naval units by 1.";
    };
    this.getIcon = function()
    {
        return "SEAMOVE";
    };
    this.getName = function()
    {
        return "Naval Move +1";
    };
};

Constructor.prototype = CO_PERK;
var CO_PERK_SEAWALKER = new Constructor();
