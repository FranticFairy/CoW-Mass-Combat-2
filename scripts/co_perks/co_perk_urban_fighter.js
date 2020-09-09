var Constructor = function()
{
    this.getOffensiveBonus = function(co, attacker, atkPosX, atkPosY,
                                 defender, defPosX, defPosY, isDefender)
    {
		if (CO_PERK.isActive(co))
		{
			if (typeof map !== 'undefined')
			{
				if (map.onMap(atkPosX, atkPosY))
				{
					var building = map.getTerrain(atkPosX, atkPosY).getBuilding();
					if (building !== null)
                    {
                        return 10;
                    }
				}
			}
		}
        return 0;
    };
	// Perk - Intel
    this.getDescription = function()
    {
        return "Increases the attack from buildings by 10%.";
    };
    this.getIcon = function()
    {
        return "URBANATK";
    };
    this.getName = function()
    {
        return "Building Atk +10%";
    };
	this.isSelectable = function(){
		return false;
	}
};

Constructor.prototype = CO_PERK;
var CO_PERK_URBAN_FIGHTER = new Constructor();
