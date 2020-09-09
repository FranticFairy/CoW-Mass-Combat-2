var Constructor = function()
{
    this.getMovementpointModifier = function(co, unit, posX, posY)
    {
		if (CO_PERK.isActive(co))
		{
            var unitType = unit.getUnitType();
			if (unitType == GameEnums.UnitType_Ekranoplan || unitType == GameEnums.UnitType_Hovercraft)
			{
				return 1;
			}
		}
        return 0;
    };
	// Perk - Intel
    this.getDescription = function()
    {
        return "Increases move of hovercraft and ekranoplan units by 1.";
    };
    this.getIcon = function()
    {
        return "GEVMOVE";
    };
    this.getName = function()
    {
        return "GEV Move +1";
    };
};

Constructor.prototype = CO_PERK;
var CO_PERK_GEV_MOVE = new Constructor();
