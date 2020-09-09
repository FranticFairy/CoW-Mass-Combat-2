var Constructor = function () {
    this.getDeffensiveBonus = function (co, attacker, atkPosX, atkPosY,
        defender, defPosX, defPosY, isDefender) {
        if (CO_PERK.isActive(co)) {
            var unitType = defender.getUnitType();
            unitType = UNIT.unitTypeToGround(unitType);
            if (unitType == GameEnums.UnitType_Naval) {
                return 10;
            }
        }
        return 0;
    };
    // Perk - Intel
    this.getDescription = function () {
        return "Increases defense of naval units by 10%.";
    };
    this.getIcon = function () {
        return "SEADEF";
    };
    this.getName = function () {
        return "Naval Defense +10%";
    };
};

Constructor.prototype = CO_PERK;
var CO_PERK_SEADEFENSE = new Constructor();
