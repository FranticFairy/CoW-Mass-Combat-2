var Constructor = function()
{
    this.getCostModifier = function(co, id, baseCost)
    {
		if (CO_PERK.isActive(co))
		{
			return -baseCost * 0.05;
		}
        return 0;
    };
	// Perk - Intel
    this.getDescription = function()
    {
        return "Production cost -5%.";
    };
    this.getIcon = function()
    {
        return "COSTReg";
    };
    this.getName = function()
    {
        return "Unit Cost -5%";
    };
	this.isSelectable = function(){
		return true;
	}
};

Constructor.prototype = CO_PERK;
var CO_PERK_SALE_PRICE_5 = new Constructor();
