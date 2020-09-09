var Constructor = function()
{
    this.getMovementpointModifier = function(co, unit, posX, posY)
    {
		if (CO_PERK.isActive(co))
		{
            var unitType = unit.getUnitType();
			if (unitType == GameEnums.UnitType_Tank)
			{
				return 1;
			}
		}
        return 0;
    };
	// Perk - Intel
    this.getDescription = function()
    {
        return "Increases move of armor units by 1.";
    };
    this.getIcon = function()
    {
        return "TANKMOVE";
    };
    this.getName = function()
    {
        return "Tank Move +1";
    };
};

Constructor.prototype = CO_PERK;
var CO_PERK_TANK_MOVE = new Constructor();
