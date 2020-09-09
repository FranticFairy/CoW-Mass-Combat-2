var Constructor = function()
{
    this.getDeffensiveBonus = function(co, attacker, atkPosX, atkPosY,
                                       defender, defPosX, defPosY, isDefender)
    {
		if (CO_PERK.isActive(co))
		{
            var unitType = defender.getUnitType();
			if (unitType == GameEnums.UnitType_Ekranoplan || unitType == GameEnums.UnitType_Hovercraft)
			{
				return 15;
			}
		}
        return 0;
    };
	// Perk - Intel
    this.getDescription = function()
    {
        return "Increases defense of hovercraft and ekranoplan units by 15%.";
    };
    this.getIcon = function()
    {
        return "GEVDEF";
    };
    this.getName = function()
    {
        return "GEV Def. +15%";
    };
};

Constructor.prototype = CO_PERK;
var CO_PERK_GEV_DEFENSE = new Constructor();
