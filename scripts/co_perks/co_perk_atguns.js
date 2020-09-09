var Constructor = function () {
    this.getFirstStrike = function (co, unit, posX, posY, attacker) {
        if (CO_PERK.isActive(co)) {
            if (typeof map !== 'undefined') {
                if (unit.getUnitID() == "FAI_GUN_AT") {
                    return true;
                }
            }
        }
        return false;
    };
    // Perk - Intel
    this.getDescription = function () {
        return "Anti-Tank Guns always get First Strike";
    };
    this.getIcon = function () {
        return "ATGUNS";
    };
    this.getName = function () {
        return "Concealed AT Guns";
    };
    this.isSelectable = function () {
        return true;
    }
};

Constructor.prototype = CO_PERK;
var CO_PERK_ATGUNS = new Constructor();
