var Constructor = function()
{
    this.getMovementpointModifier = function(co, unit, posX, posY)
    {
		if (CO_PERK.isActive(co))
		{
            var unitType = unit.getUnitType();
			if (unitType == GameEnums.UnitType_Helicopter)
			{
				return 1;
			}
		}
        return 0;
    };
	// Perk - Intel
    this.getDescription = function()
    {
        return "Increases move of helicopter units by 1.";
    };
    this.getIcon = function()
    {
        return "HELIMOVE";
    };
    this.getName = function()
    {
        return "Heli Move +1";
    };
};

Constructor.prototype = CO_PERK;
var CO_PERK_HELI_MOVE = new Constructor();
