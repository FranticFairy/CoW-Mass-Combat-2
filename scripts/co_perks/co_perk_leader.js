var Constructor = function()
{
    this.getCOUnitRange = function(co)
    {
		if (CO_PERK.isActive(co))
		{
			return 1;
		}
        return 0;
    };
	// Perk - Intel
    this.getDescription = function()
    {
        return "Increases the CO-Zone of the CO by 1.";
    };
    this.getIcon = function()
    {
        return "co0";
    };
    this.getName = function()
    {
        return "CO-Zone: +1 Range";
    };
	this.isSelectable = function(){
		return false;
	}
};

Constructor.prototype = CO_PERK;
var CO_PERK_LEADER = new Constructor();
