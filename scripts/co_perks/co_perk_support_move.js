var Constructor = function()
{
    this.getMovementpointModifier = function(co, unit, posX, posY)
    {
		if (CO_PERK.isActive(co))
		{
            var unitType = unit.getUnitType();
			if (unitType == GameEnums.UnitType_Support)
			{
				return 1;
			}
		}
        return 0;
    };
	// Perk - Intel
    this.getDescription = function()
    {
        return "Increases move of support units by 1.";
    };
    this.getIcon = function()
    {
        return "SUPPMOVE";
    };
    this.getName = function()
    {
        return "Support Move +1";
    };
};

Constructor.prototype = CO_PERK;
var CO_PERK_SUPPORT_MOVE = new Constructor();
