var Constructor = function()
{
    this.perform = function(unit)
    {
        var unitName = unit.getCustomName();
        var action = unitName.split("_")[0];

        if(action === "BUILD") {
            var buildingType = unitName.split("_")[1]
            ACTION_BUILD_UPGRADE_FINAL.build(unit, buildingType);
        }
        
    };

    this.build = function(unit, buildingType) {
        var player = map.getCurrentPlayer();
        var x = unit.getX();
        var y = unit.getY();
        var terrain = map.getTerrain(x, y);

        terrain.loadBuilding(buildingType);
        terrain.getBuilding().setUnitOwner(unit);
        unit.removeUnit();
        ACTION_TERRAIN_LOADSPRITES.perform(x,y);
    }
}

Constructor.prototype = ACTION;
var ACTION_BUILD_UPGRADE_FINAL = new Constructor();
