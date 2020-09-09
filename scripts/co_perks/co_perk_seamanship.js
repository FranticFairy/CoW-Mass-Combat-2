var Constructor = function () {
    this.getOffensiveBonus = function (co, attacker, atkPosX, atkPosY,
        defender, defPosX, defPosY, isDefender) {
        if (CO_PERK.isActive(co)) {
            var unitType = attacker.getUnitType();
            unitType = UNIT.unitTypeToGround(unitType);
            if (unitType == GameEnums.UnitType_Naval) {
                return 10;
            }
        }
        return 0;
    };
    // Perk - Intel
    this.getDescription = function () {
        return "Increases attack of naval units by 10%.";
    };
    this.getIcon = function () {
        return "SEAATK";
    };
    this.getName = function () {
        return "Naval Attack +10%";
    };
};

Constructor.prototype = CO_PERK;
var CO_PERK_SEAMANSHIP = new Constructor();
