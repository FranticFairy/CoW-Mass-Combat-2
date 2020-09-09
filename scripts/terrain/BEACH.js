BEACH.init = function (terrain)
{
    terrain.setTerrainName(BEACH.getName());
    terrain.setVisionHigh(0);
};

BEACH.loadOverlaySprite = function(terrain)
{

};


BEACH.loadBaseSprite = function (terrain) {
    var surroundings = terrain.getSurroundings("BEACH,FOG,ROUGH_SEA,REAF,BRIDGE,SEA,HARBOUR,TEMPORARY_HARBOUR", false, false, GameEnums.Directions_All, true, true);
    var surroundingsDirect = terrain.getSurroundings("BEACH,FOG,ROUGH_SEA,REAF,BRIDGE,SEA,HARBOUR,TEMPORARY_HARBOUR", false, false, GameEnums.Directions_Direct, true, true);
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
    terrain.loadBaseSprite("beach" + surroundings);
    } else {
        terrain.loadBaseSprite("beach");
    }
};

BEACH.getTerrainSprites = function()
{
    // array of sprites that can be selected as fix sprites for this terrain
    return  [
    "beach+E+S+SW+W",
	"beach+E+S+W",
	"beach+E+S",
	"beach+E+SE+S+SW+W",
	"beach+E+SE+S+W",
	"beach+E+SE+S",
	"beach+E+W",
	"beach+E",
	"beach+N+E+S+SW+W+NW",
	"beach+N+E+S+SW+W",
	"beach+N+E+S+W+NW",
	"beach+N+E+S+W",
	"beach+N+E+S",
	"beach+N+E+SE+S+SW+W+NW",
	"beach+N+E+SE+S+SW+W",
	"beach+N+E+SE+S+W+NW",
	"beach+N+E+SE+S+W",
	"beach+N+E+SE+S",
	"beach+N+E+W+NW",
	"beach+N+E+W",
	"beach+N+E",
	"beach+N+NE+E+S+SW+W+NW",
	"beach+N+NE+E+S+SW+W",
	"beach+N+NE+E+S+W+NW",
	"beach+N+NE+E+S+W",
	"beach+N+NE+E+S",
	"beach+N+NE+E+SE+S+SW+W+NW",
	"beach+N+NE+E+SE+S+SW+W",
	"beach+N+NE+E+SE+S+W+NW",
	"beach+N+NE+E+SE+S+W",
	"beach+N+NE+E+SE+S",
	"beach+N+NE+E+W+NW",
	"beach+N+NE+E+W",
	"beach+N+NE+E",
	"beach+N+S+SW+W+NW",
	"beach+N+S+SW+W",
	"beach+N+S+W+NW",
	"beach+N+S+W",
	"beach+N+S",
	"beach+N+W+NW",
	"beach+N+W",
	"beach+N",
	"beach+S+SW+W",
	"beach+S+W",
	"beach+S",
	"beach+W",
    "beach"
    ];
};