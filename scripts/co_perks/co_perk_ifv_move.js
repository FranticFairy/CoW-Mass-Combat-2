var Constructor = function()
{
    this.getMovementpointModifier = function(co, unit, posX, posY)
    {
		if (CO_PERK.isActive(co))
		{
            var unitType = unit.getUnitType();
			if (unitType == GameEnums.UnitType_Infantry)
			{
				return 1;
			}
		}
        return 0;
    };
	// Perk - Intel
    this.getDescription = function()
    {
        return "Increases move of infantry units by 1.";
    };
    this.getIcon = function()
    {
        return "IFVMOVE";
    };
    this.getName = function()
    {
        return "Infantry Move +1";
    };
};

Constructor.prototype = CO_PERK;
var CO_PERK_IFV_MOVE = new Constructor();
