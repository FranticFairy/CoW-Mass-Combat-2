var Constructor = function()
{
    this.getDeffensiveBonus = function(co, attacker, atkPosX, atkPosY,
                                       defender, defPosX, defPosY, isDefender)
    {
		if (CO_PERK.isActive(co))
		{
            if(defender.getLoadedUnitCount() >= 1) {
                return 25;
            }
		}
        return 0;
    };
	// Perk - Intel
    this.getDescription = function()
    {
        return "Increases defense by 25% if carrying units.";
    };
    this.getIcon = function()
    {
        return "TRANSDEF";
    };
    this.getName = function()
    {
        return "Transport Def. +25%";
    };
	this.isSelectable = function(){
		return true;
	}
};

Constructor.prototype = CO_PERK;
var CO_PERK_APC_GUARD = new Constructor();
