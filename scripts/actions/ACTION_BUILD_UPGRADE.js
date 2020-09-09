var Constructor = function () {
    // called for loading the main sprite
    this.canBePerformed = function (action) {
        var unit = action.getTargetUnit();
        var building = action.getTargetBuilding();
        var player = building.getOwner();
        if ((unit === null) &&
            (building !== null) &&
            (player !== null) &&
            (player === map.getCurrentPlayer())) {
            return true;
        }
        return false;
    };
    this.getActionText = function () {
        return qsTr("Upgrade");
    };
    this.getIcon = function () {
        return "build";
    };

    this.isFinalStep = function (action) {
        if (action.getInputStep() === 0) {
            return false;
        }
        else {
            return true;
        }
    };

    this.calculateCost = function (buildingType, building) {
        var cost = 8000;
        var player = map.getCurrentPlayer();
        buildingType = buildingType.toUpperCase();

        var mapBuildings = map.getBuildingCount(buildingType);

        if (mapBuildings <= 0) {
            cost = cost * 2;
        } else {
            var playerBuildings = player.getBuildingCount(buildingType);
            if (playerBuildings <= 0) {
                cost = cost + (cost / 2);
            }
        }
        return cost;
    }

    this.checkCoastal = function(building) {
        var x = building.getX();
        var y = building.getY();
        var terrain = map.getTerrain(x,y)
        
        var coast = terrain.getSurroundings("BEACH,FOG,ROUGH_SEA,REAF,SEA,HARBOUR,TEMPORARY_HARBOUR", true, false, GameEnums.Directions_Direct, false, true);

        if(coast != "") {
            return true;
        }
        return false;
    }

    this.checkRails = function(building) {
        var x = building.getX();
        var y = building.getY();
        var terrain = map.getTerrain(x,y)
        
        var rails = terrain.getSurroundings("RAILWAY,RAILCROSS,RAILBRIDGE,STATION", false, false, GameEnums.Directions_Direct, false, true);

        if(rails != "") {
            return true;
        }
        return false;
    }

    this.getStepInputType = function (action) {
        // supported types are MENU and FIELD
        if (action.getInputStep() === 0) {
            return "MENU";
        }
        return "";
    };

    this.getStepData = function (action, data) {
        var building = action.getTargetBuilding();
        var types = ["Factory","Airport"];
        if(ACTION_BUILD_UPGRADE.checkCoastal(building) === true) {
            types.push("Harbour");
        }
        if(ACTION_BUILD_UPGRADE.checkRails(building) === true) {
            types.push("Station");
        }
        var funds = map.getCurrentPlayer().getFunds();
        for (i = 0; i < types.length; i++) {
            var name = types[i];
            var costs = ACTION_BUILD_UPGRADE.calculateCost(types[i], building);
            var enabled = false;
            if (costs <= funds) {
                enabled = true;
            }
            data.addData(name + " " + costs.toString(),types[i],"FAI_UTIL_ACTIONDOZER", costs, enabled);
        }
    };


    this.perform = function (action) {
        action.startReading();
        var player = map.getCurrentPlayer();
        var building = action.getTargetBuilding();
        var x = building.getX();
        var y = building.getY();
        var buildingID = action.readDataString();

        map.getCurrentPlayer().addFunds(-action.getCosts());
        var unit = map.spawnUnit(action.getTarget().x, action.getTarget().y, "FAI_UTIL_ACTIONDOZER", player);
        if (unit !== null) {
            unit.setCustomName("BUILD_" + buildingID.toUpperCase());
            ACTION_BUILD_UPGRADE_FINAL.perform(unit);
        }
    };
}

Constructor.prototype = ACTION;
var ACTION_BUILD_UPGRADE = new Constructor();
