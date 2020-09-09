var Constructor = function()
{
    this.getOffensiveBonus = function(co, attacker, atkPosX, atkPosY,
                                 defender, defPosX, defPosY, isDefender)
    {
		if (CO_PERK.isActive(co))
		{
			if (attacker.getBaseMaxRange() === 1)
			{
				return 8;
			}
		}
        return 0;
    };
	// Perk - Intel
    this.getDescription = function()
    {
        return "Increases the direct attack of units by 8%.";
    };
    this.getIcon = function()
    {
        return "ATKSuper";
    };
    this.getName = function()
    {
        return "Direct Atk. +8%";
    };
	this.isSelectable = function(){
		return true;
	}
};

Constructor.prototype = CO_PERK;
var CO_PERK_BRUISER_8 = new Constructor();
