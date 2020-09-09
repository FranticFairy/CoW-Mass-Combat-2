var Constructor = function () {
    this.perform = function (unit, player) {
        // if(unit.getUnitID() == "FAI_UTIL_SUPPLY") {
        //     map.getGameRecorder().buildUnit(player.getPlayerID());
        //     var spawnUnit = unit.spawnUnit("FAI_GUN_AT");
        //     unit.setHasMoved(true);
        //     spawnUnit.setHasMoved(true);
        //     player.buildedUnit(spawnUnit);
        // }
    }
}

Constructor.prototype = ACTION;
var ACTION_ONBUILD = new Constructor();
