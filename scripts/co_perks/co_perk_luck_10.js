var Constructor = function()
{
    this.getBonusLuck = function(co, unit, posX, posY)
    {
		if (CO_PERK.isActive(co))
		{
			return 10;
		}
        return 0;
    };
	// Perk - Intel
    this.getDescription = function()
    {
        return "Increases the luck of units by 10%.";
    };
    this.getIcon = function()
    {
        return "LUKSuper";
    };
    this.getName = function()
    {
        return "Luck +10%";
    };
	this.isSelectable = function(){
		return true;
	}
};

Constructor.prototype = CO_PERK;
var CO_PERK_LUCK_10 = new Constructor();
