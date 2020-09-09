var Constructor = function () {
    this.getName = function () {
        return qsTr("Titan");
    };
    this.movementpointsTable = [
    ];

    this.getMovementpoints = function (terrain, unit) {
        var id = terrain.getID();
        var mapWidth = map.getMapWidth();

        if(terrain.getX() != 0 && terrain.getY() != 0 && (terrain.getX() < map.getMapWidth()-1) && (terrain.getY() < map.getMapHeight()-1)) {
            if(terrain.getID() === "TELEPORTTILE") {
                return 0;
            } else {
                return 1;
            }
        }
        if(unit.getID() == "FAI_TITAN_PART") {
            return 1;
        }
        return MOVEMENTTABLE.getMovementpointsFromTable(terrain, MOVE_FAI_TITAN.movementpointsTable);
    };
};
Constructor.prototype = MOVEMENTTABLE;
var MOVE_FAI_TITAN = new Constructor();
