var Constructor = function()
{
    this.getOffensiveBonus = function(co, attacker, atkPosX, atkPosY,
                                 defender, defPosX, defPosY, isDefender)
    {
		if (CO_PERK.isActive(co))
		{
			var towers = co.getOwner().getBuildingCount("TOWER");        
			return towers * 5;
		}
        return 0;
    };
	// Perk - Intel
    this.getDescription = function()
    {
        return "Increases the attack boost per tower by 5%.";
    };
    this.getIcon = function()
    {
        return "towerpower";
    };
    this.getName = function()
    {
        return "Com. Tower: +5% Atk";
    };
	this.isSelectable = function(){
		return false;
	}
};

Constructor.prototype = CO_PERK;
var CO_PERK_COM_ATTACKER = new Constructor();
