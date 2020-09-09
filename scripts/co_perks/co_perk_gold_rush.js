var Constructor = function()
{
    this.getBonusIncome = function(co, building, income)
    {
		if (CO_PERK.isActive(co))
		{
			return income * 0.1;
		}
        return 0;
    };
	// Perk - Intel
    this.getDescription = function()
    {
        return "Increases the income from each building by 10%.";
    };
    this.getIcon = function()
    {
        return "INCOMEREG";
    };
    this.getName = function()
    {
        return "Income +10%";
    };
	this.isSelectable = function(){
		return false;
	}
};

Constructor.prototype = CO_PERK;
var CO_PERK_GOLD_RUSH = new Constructor();
