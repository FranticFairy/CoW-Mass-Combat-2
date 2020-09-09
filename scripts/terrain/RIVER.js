
RIVER.loadBaseSprite = function (terrain) {
    var surroundings = terrain.getSurroundings("RIVER,BRIDGE,RAILBRIDGE,SEA,FORD,HARBOUR,TEMPORARY_HARBOUR", false, false, GameEnums.Directions_All, true, true);
    var surroundingsDirect = terrain.getSurroundings("RIVER,RAILBRIDGE,BRIDGE,SEA,FORD,HARBOUR,TEMPORARY_HARBOUR", false, false, GameEnums.Directions_Direct, true, true);
    var surroundingsSea = terrain.getSurroundings("SEA", true, false, GameEnums.Directions_All);
    //
    var mapTest = map.getTerrain(terrain.getX(), terrain.getY());

    if(mapTest != null) {
        
    if (surroundings.includes("+NE")) {
        if (!(surroundingsDirect.includes("+N")) || !(surroundingsDirect.includes("+E"))) {
            surroundings = surroundings.replace("+NE", "");
        }
    }
    if (surroundings.includes("+SE")) {
        if (!(surroundingsDirect.includes("+S")) || !(surroundingsDirect.includes("+E"))) {
            surroundings = surroundings.replace("+SE", "");
        }
    }
    if (surroundings.includes("+SW")) {
        if (!(surroundingsDirect.includes("+S")) || !(surroundingsDirect.includes("+W"))) {
            surroundings = surroundings.replace("+SW", "");
        }
    }
    if (surroundings.includes("+NW")) {
        if (!(surroundingsDirect.includes("+N")) || !(surroundingsDirect.includes("+W"))) {
            surroundings = surroundings.replace("+NW", "");
        }
    }


    if (!(surroundingsSea.includes("+N"))) {
        var surroundingsN = terrain.getSurroundings("SEA", true, false, GameEnums.Directions_North);
        if (surroundingsN === "+N") {
            surroundings = surroundings.replace("+N", "");
        }
    }

    if (!(surroundingsSea.includes("+S"))) {
        var surroundingsS = terrain.getSurroundings("SEA", true, false, GameEnums.Directions_South);
        if (surroundingsS === "+S") {
            surroundings = surroundings.replace("+S", "");
        }
    }

    if ((surroundingsSea.includes("+E"))) {
        var surroundingsE = terrain.getSurroundings("SEA", true, false, GameEnums.Directions_South);
        if (surroundingsE === "+E") {
            surroundings = surroundings.replace("+E", "");
        }
    }
    if ((surroundingsSea.includes("+W"))) {
        var surroundingsW = terrain.getSurroundings("SEA", true, false, GameEnums.Directions_South);
        if (surroundingsW === "+W") {
            surroundings = surroundings.replace("+W", "");
        }
    }
    terrain.loadBaseSprite("river" + surroundings);
    } else {
        terrain.loadBaseSprite("river");
    }
};

RIVER.init = function (terrain)
{
    terrain.setVisionHigh(0);
    terrain.setTerrainName(RIVER.getName());
};

RIVER.getTerrainSprites = function()
{
    // array of sprites that can be selected as fix sprites for this terrain
    return  [
    "river+E+S+SW+W",
	"river+E+S+W",
	"river+E+S",
	"river+E+SE+S+SW+W",
	"river+E+SE+S+W",
	"river+E+SE+S",
	"river+E+W",
	"river+E",
	"river+N+E+S+SW+W+NW",
	"river+N+E+S+SW+W",
	"river+N+E+S+W+NW",
	"river+N+E+S+W",
	"river+N+E+S",
	"river+N+E+SE+S+SW+W+NW",
	"river+N+E+SE+S+SW+W",
	"river+N+E+SE+S+W+NW",
	"river+N+E+SE+S+W",
	"river+N+E+SE+S",
	"river+N+E+W+NW",
	"river+N+E+W",
	"river+N+E",
	"river+N+NE+E+S+SW+W+NW",
	"river+N+NE+E+S+SW+W",
	"river+N+NE+E+S+W+NW",
	"river+N+NE+E+S+W",
	"river+N+NE+E+S",
	"river+N+NE+E+SE+S+SW+W+NW",
	"river+N+NE+E+SE+S+SW+W",
	"river+N+NE+E+SE+S+W+NW",
	"river+N+NE+E+SE+S+W",
	"river+N+NE+E+SE+S",
	"river+N+NE+E+W+NW",
	"river+N+NE+E+W",
	"river+N+NE+E",
	"river+N+S+SW+W+NW",
	"river+N+S+SW+W",
	"river+N+S+W+NW",
	"river+N+S+W",
	"river+N+S",
	"river+N+W+NW",
	"river+N+W",
	"river+N",
	"river+S+SW+W",
	"river+S+W",
	"river+S",
	"river+W",
    "river"
    ];
};