var Constructor = function () {
    this.getFirerangeModifier = function (co, unit, posX, posY) {
        if (CO_PERK.isActive(co)) {
            if (typeof map !== 'undefined') {
                if (unit.getUnitID() == "FAI_GUN_ARTY") {
                    if (map.onMap(posX, posY)) {
                        var building = map.getTerrain(posX, posY).getBuilding();
                        if (building != null) {

                            if (building.getBuildingID() == "TRENCH") {
                                return 1;
                            }
                        }
                    }
                }
            }
        }
        return 0;
    };
    // Perk - Intel
    this.getDescription = function () {
        return "Heavy Field Artillery Range +1 if in a trench";
    };
    this.getIcon = function () {
        return "TRENCHGUNS";
    };
    this.getName = function () {
        return "Entrenched Guns";
    };
    this.isSelectable = function () {
        return true;
    }
};

Constructor.prototype = CO_PERK;
var CO_PERK_TRENCHGUNS = new Constructor();
