var Constructor = function()
{
    this.getCostModifier = function(co, id, baseCost)
    {
		if (CO_PERK.isActive(co))
		{
			return -baseCost * 0.08;
		}
        return 0;
    };
	// Perk - Intel
    this.getDescription = function()
    {
        return "Production cost -8%.";
    };
    this.getIcon = function()
    {
        return "COSTSuper";
    };
    this.getName = function()
    {
        return "Unit Cost -8%";
    };
	this.isSelectable = function(){
		return true;
	}
};

Constructor.prototype = CO_PERK;
var CO_PERK_SALE_PRICE_8 = new Constructor();
