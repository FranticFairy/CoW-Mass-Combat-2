var Constructor = function()
{
    this.getDeffensiveBonus = function(co, attacker, atkPosX, atkPosY,
                                       defender, defPosX, defPosY, isDefender)
    {
		if (CO_PERK.isActive(co))
		{
			var rangedAttacked = (Math.abs(atkPosX - defPosX) + Math.abs(atkPosY - defPosY) > 1);
			if (!rangedAttacked)
			{
				return 12;
			}
		}
        return 0;
    };
	// Perk - Intel
    this.getDescription = function()
    {
        return "Increases the direct-fire defense by 12%.";
    };
    this.getIcon = function()
    {
        return "DEFSuper";
    };
    this.getName = function()
    {
        return "Direct Def. +12%";
    };
	this.isSelectable = function(){
		return true;
	}
};

Constructor.prototype = CO_PERK;
var CO_PERK_SLAM_GUARD_12 = new Constructor();
