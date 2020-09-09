var Constructor = function () {
    // called for loading the main sprite
    this.spawn = function (unit) {
        var x = unit.getX();
        var y = unit.getY();
        var player = unit.getOwner();

        var unit = map.spawnUnit(x + 1, y, "FAI_TITAN_PART", player);
        var unit = map.spawnUnit(x, y + 1, "FAI_TITAN_PART", player);
        var unit = map.spawnUnit(x - 1, y, "FAI_TITAN_PART", player);
        var unit = map.spawnUnit(x, y - 1, "FAI_TITAN_PART", player);
    };

    this.titanMove = function (unit) {
        var curX = unit.getX();
        var curY = unit.getY();
        var player = unit.getOwner();

        var variables = unit.getVariables();
        var turnStartX = variables.getVariable("turnStartX");
        var turnStartY = variables.getVariable("turnStartY");

        var startX = turnStartX.readDataInt32();
        var startY = turnStartY.readDataInt32();

        //moveUnitToField
        var targetTerrain = null;
        var targetUnit = null;
        var destinationTerrain = null;
        var victimUnit = null;

        targetTerrain = map.getTerrain(startX + 1, startY);
        if (targetTerrain != null) {
            targetUnit = targetTerrain.getUnit();
            if (targetUnit != null) {
                if ((targetUnit.getOwner() == player) && targetUnit.getUnitID() == "FAI_TITAN_PART") {

                    destinationTerrain = map.getTerrain(curX + 1, curY);
                    victimUnit = destinationTerrain.getUnit();
                    if (victimUnit !== null) {
                        map.getGameRecorder().destroyedUnit(victimUnit.getOwner().getPlayerID());
                        victimUnit.killUnit();
                    }
                    destinationTerrain = null;
                    victimUnit = null;

                    targetUnit.moveUnitToField(curX + 1, curY);
                }
            }
        }
        targetTerrain = null;
        targetUnit = null;

        targetTerrain = map.getTerrain(startX, startY + 1);
        if (targetTerrain != null) {
            targetUnit = targetTerrain.getUnit();
            if (targetUnit != null) {
                if ((targetUnit.getOwner() == player) && targetUnit.getUnitID() == "FAI_TITAN_PART") {

                    destinationTerrain = map.getTerrain(curX, curY + 1);
                    victimUnit = destinationTerrain.getUnit();
                    if (victimUnit !== null) {
                        map.getGameRecorder().destroyedUnit(victimUnit.getOwner().getPlayerID());
                        victimUnit.killUnit();
                    }
                    destinationTerrain = null;
                    victimUnit = null;

                    targetUnit.moveUnitToField(curX, curY + 1);
                }
            }
        }
        targetTerrain = null;
        targetUnit = null;

        targetTerrain = map.getTerrain(startX - 1, startY);
        if (targetTerrain != null) {
            targetUnit = targetTerrain.getUnit();
            if (targetUnit != null) {
                if ((targetUnit.getOwner() == player) && targetUnit.getUnitID() == "FAI_TITAN_PART") {

                    destinationTerrain = map.getTerrain(curX - 1, curY);
                    victimUnit = destinationTerrain.getUnit();
                    if (victimUnit !== null) {
                        map.getGameRecorder().destroyedUnit(victimUnit.getOwner().getPlayerID());
                        victimUnit.killUnit();
                    }
                    destinationTerrain = null;
                    victimUnit = null;

                    targetUnit.moveUnitToField(curX - 1, curY);
                }
            }
        }
        targetTerrain = null;
        targetUnit = null;

        targetTerrain = map.getTerrain(startX, startY - 1);
        if (targetTerrain != null) {
            targetUnit = targetTerrain.getUnit();
            if (targetUnit != null) {
                if ((targetUnit.getOwner() == player) && targetUnit.getUnitID() == "FAI_TITAN_PART") {

                    destinationTerrain = map.getTerrain(curX, curY - 1);
                    victimUnit = destinationTerrain.getUnit();
                    if (victimUnit !== null) {
                        map.getGameRecorder().destroyedUnit(victimUnit.getOwner().getPlayerID());
                        victimUnit.killUnit();
                    }
                    destinationTerrain = null;
                    victimUnit = null;

                    targetUnit.moveUnitToField(curX, curY - 1);
                }
            }
        }
        targetTerrain = null;
        targetUnit = null;



    }
}

Constructor.prototype = ACTION;
var ACTION_TITAN_UTIL = new Constructor();
