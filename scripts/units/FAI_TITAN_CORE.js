var Constructor = function () {
    this.init = function (unit) {
        unit.setMinRange(2);
        unit.setMaxRange(3);
        unit.setWeapon1ID("WEP_FAI_AIM");

        unit.setAmmo1(9);
        unit.setMaxAmmo1(9);
        unit.setFuel(100);
        unit.setMaxFuel(100);
        unit.setBaseMovementPoints(3);
        unit.setVision(2);

        var variables = unit.getVariables();
        var initated = variables.createVariable("INITIATED");

        var topAlive = variables.createVariable("TOPALIVE");
        var leftAlive = variables.createVariable("LEFTALIVE");
        var rightAlive = variables.createVariable("RIGHTALIVE");
        var bottomAlive = variables.createVariable("BOTTOMALIVE");

        initated.writeDataBool(false);

        topAlive.writeDataBool(true);
        leftAlive.writeDataBool(true);
        rightAlive.writeDataBool(true);
        bottomAlive.writeDataBool(true);

        unit.setIgnoreUnitCollision(true);

    };
    this.startOfTurn = function (unit) {
        var variables = unit.getVariables();
        var initated = variables.getVariable("INITIATED");

        var topAliveVar = variables.getVariable("TOPALIVE");
        var leftAliveVar = variables.getVariable("LEFTALIVE");
        var rightAliveVar = variables.getVariable("RIGHTALIVE");
        var bottomAliveVar = variables.getVariable("BOTTOMALIVE");

        var turnStartX = variables.createVariable("turnStartX");
        var turnStartY = variables.createVariable("turnStartY");
        var value = initated.readDataBool();

        var topAlive = topAliveVar.readDataBool();
        var leftAlive = leftAliveVar.readDataBool();
        var rightAlive = rightAliveVar.readDataBool();
        var bottomAlive = bottomAliveVar.readDataBool();

        if (value === false) {
            ACTION_TITAN_UTIL.spawn(unit);
            initated.writeDataBool(true);
        }
        turnStartX.writeDataInt32(unit.getX());
        turnStartY.writeDataInt32(unit.getY());

        var targetTerrain = null;
        var targetUnit = null;

        if (leftAlive === true) {
            targetTerrain = map.getTerrain(unit.getX() + 1, unit.getY());
            if (targetTerrain != null) {
                targetUnit = targetTerrain.getUnit();
                if (targetUnit != null) {
                    if ((targetUnit.getOwner() != player) || targetUnit.getUnitID() != "FAI_TITAN_PART") {
                        leftAliveVar.writeDataBool(false);
                        unit.setHp(unit.getHpRounded() - 2);
                    }
                }
            }
        }

        if (topAlive === true) {
            targetTerrain = map.getTerrain(unit.getX(), unit.getY() + 1);
            if (targetTerrain != null) {
                targetUnit = targetTerrain.getUnit();
                if (targetUnit != null) {
                    if ((targetUnit.getOwner() != player) || targetUnit.getUnitID() != "FAI_TITAN_PART") {
                        topAliveVar.writeDataBool(false);
                        unit.setHp(unit.getHpRounded() - 2);
                    }
                }
            }
        }

        if (rightAlive === true) {
            targetTerrain = map.getTerrain(unit.getX() - 1, unit.getY());
            if (targetTerrain != null) {
                targetUnit = targetTerrain.getUnit();
                if (targetUnit != null) {
                    if ((targetUnit.getOwner() != player) || targetUnit.getUnitID() != "FAI_TITAN_PART") {
                        rightAliveVar.writeDataBool(false);
                        unit.setHp(unit.getHpRounded() - 2);
                    }
                }
            }
        }

        if (bottomAlive === true) {
            targetTerrain = map.getTerrain(unit.getX(), unit.getY() - 1);
            if (targetTerrain != null) {
                targetUnit = targetTerrain.getUnit();
                if (targetUnit != null) {
                    if ((targetUnit.getOwner() != player) || targetUnit.getUnitID() != "FAI_TITAN_PART") {
                        bottomAliveVar.writeDataBool(false);
                        unit.setHp(unit.getHpRounded() - 2);
                    }
                }
            }
        }


    };
    // called for loading the main sprite
    this.loadSprites = function (unit) {
        // load sprites
        var unitID = unit.getUnitID().toLowerCase();
        unit.loadSprite(unitID, false);
        unit.loadSpriteV2(unitID + "+mask", GameEnums.Recoloring_Table);
    };
    this.doWalkingAnimation = function (action) {
        var unit = action.getTargetUnit();
        var animation = GameAnimationFactory.createWalkingAnimation(unit, action);
        var unitID = unit.getUnitID().toLowerCase();
        animation.loadSpriteV2(unitID + "+mask", GameEnums.Recoloring_Table, 1);
        animation.loadSprite(unitID, false, 1);
        animation.setSound("tank.wav", -2, "mods/MassCombat2/sounds/");
        return animation;
    };
    this.getMovementType = function () {
        return "MOVE_FAI_TITAN";
    };
    this.getBaseCost = function () {
        return 50000;
    };
    this.getName = function () {
        return qsTr("Titan Core")
    };
    this.canMoveAndFire = function () {
        return true;
    };
    this.getDescription = function () {
        return qsTr("The core of a Titan. Tough, and armed with SAMs, the easiest way to damage is is by taking down it's parts first.");
    };
    this.getUnitType = function () {
        return GameEnums.UnitType_Super;
    };
    this.getActions = function()
    {
        // returns a string id list of the actions this unit can perform
        return "ACTION_HOELLIUM_WAIT";
    };
}

Constructor.prototype = UNIT;
var FAI_TITAN_CORE = new Constructor();
