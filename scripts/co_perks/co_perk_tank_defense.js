var Constructor = function () {
    this.getDeffensiveBonus = function (co, attacker, atkPosX, atkPosY,
        defender, defPosX, defPosY, isDefender) {
        if (CO_PERK.isActive(co)) {
            var unitType = attacker.getUnitType();
            if (unitType == GameEnums.UnitType_Tank) {
                return 15;
            }
        }
        return 0;
    };
    // Perk - Intel
    this.getDescription = function () {
        return "Increases defense of armor units by 15%.";
    };
    this.getIcon = function () {
        return "TANKDEF";
    };
    this.getName = function () {
        return "Tank Def. +10%";
    };
};

Constructor.prototype = CO_PERK;
var CO_PERK_TANK_DEFENSE = new Constructor();
