var Constructor = function()
{
    this.getMovementcostModifier = function(co, unit, posX, posY)
    {
		if (CO_PERK.isActive(co))
		{
			if (typeof map !== 'undefined')
			{
				if (map.onMap(posX, posY))
				{
					var terrainID = map.getTerrain(posX, posY).getID();
					var isMountain = (terrainID === "MOUNTAIN") ||
                            (terrainID === "DESERT_ROCK") ||
                            (terrainID === "SNOW_MOUNTAIN");
                    if (isMountain)
                    {
                        return -999;
                    }
				}
			}
		}
        return 0;
    };
	// Perk - Intel
    this.getDescription = function()
    {
        return "Sets movement costs over mountains to 1.";
    };
    this.getIcon = function()
    {
        return "MTNMOV";
    };
    this.getName = function()
    {
        return "Mountain Move = 1";
    };
	this.isSelectable = function(){
		return false;
	}
};

Constructor.prototype = CO_PERK;
var CO_PERK_CLIMBER = new Constructor();
