CO.getFirstStrike = function (co, unit, posX, posY, attacker) {
    if (CO_PERK.isActive(co)) {
        if (typeof map !== 'undefined') {
            if (unit.getUnitID() == "FAI_GUN_AT") {
                var unitType = attacker.getUnitType();
                if (unitType == GameEnums.UnitType_Tank) {
                    return true;
                }
            }
        }
    }
    return false;
};