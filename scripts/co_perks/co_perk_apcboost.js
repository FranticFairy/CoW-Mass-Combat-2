var Constructor = function () {
    this.getMovementpointModifier = function (co, unit, posX, posY) {
        if (CO_PERK.isActive(co)) {
            if (unit.getLoadedUnitCount() >= 1) {
                return 1;
            }
        }
        return 0;
    };
    this.getOffensiveReduction = function (co, attacker, atkPosX, atkPosY,
        defender, defPosX, defPosY, isDefender) {
        if (CO_PERK.isActive(co)) {
            if (defender.getLoadedUnitCount() >= 1) {
                return 15;
            }
        }
        return 0;
    };
    // Perk - Intel
    this.getDescription = function () {
        return "Increases move by 1% if carrying units, but decreases attack by 15%.";
    };
    this.getIcon = function () {
        return "TRANSMOVE";
    };
    this.getName = function () {
        return "Transport Move +1";
    };
    this.isSelectable = function () {
        return true;
    }
};

Constructor.prototype = CO_PERK;
var CO_PERK_APCBOOST = new Constructor();
