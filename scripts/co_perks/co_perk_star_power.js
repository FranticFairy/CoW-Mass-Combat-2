var Constructor = function()
{
    this.gainPowerstar = function(co, fundsDamage, x, y, hpDamage, defender, counterAttack)
    {
		if (CO_PERK.isActive(co))
		{
            var powerGain = CO.getStarGain(co, fundsDamage, x, y, hpDamage, defender, counterAttack);
            co.setPowerFilled(co.getPowerFilled() + powerGain * 0.2);
		}
        return 0;
    };
	// Perk - Intel
    this.getDescription = function()
    {
        return "Power meter fills up more quickly.";
    };
    this.getIcon = function()
    {
        return "STARUP";
    };
    this.getName = function()
    {
        return "Faster Power";
    };
	this.isSelectable = function(){
		return false;
	}
};

Constructor.prototype = CO_PERK;
var CO_PERK_STAR_POWER = new Constructor();
