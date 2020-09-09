SEA.loadOverlaySprite = function (terrain) {

};

SEA.loadBaseSprite = function (terrain) {
    var surroundings = terrain.getSurroundings("BEACH,FOG,ROUGH_SEA,REAF,SEA,HARBOUR,TEMPORARY_HARBOUR,RIVER,BRIDGE", false, false, GameEnums.Directions_All, true, true);
    var surroundingsDirect = terrain.getSurroundings("BEACH,FOG,ROUGH_SEA,REAF,SEA,HARBOUR,TEMPORARY_HARBOUR,RIVER,BRIDGE", false, false, GameEnums.Directions_Direct, true, true);
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
    terrain.loadBaseSprite("sea" + surroundings);
    } else {
        terrain.loadBaseSprite("sea");
    }
    // load river overlay
    /*
    var surroundingsSeaDirect = terrain.getSurroundings("SEA", true, false, GameEnums.Directions_Direct, false);
    var surroundingsRiver = terrain.getSurroundings("RIVER,FORD", false, false, GameEnums.Directions_Direct, false, true);
    var surroundingsRiver2 = terrain.getSurroundings("RIVER,FORD", false, false, GameEnums.Directions_All, false, true);
    var surroundingsBridge = terrain.getSurroundings("BRIDGE",false,false, GameEnums.Directions_Direct, false, true);

    if(map != null) {
        if(surroundingsBridge.includes("+N")) {
            var detectedTerrain = map.getTerrain(terrain.getX(), terrain.getY()-1);
            if(detectedTerrain != null) {
                if(detectedTerrain.getBaseTerrainID() != "SEA") {
                    surroundingsRiver += "+N"
                }
            }
        }
        if(surroundingsBridge.includes("+E")) {
            var detectedTerrain = map.getTerrain(terrain.getX()+1, terrain.getY());
            if(detectedTerrain != null) {
                if(detectedTerrain.getBaseTerrainID() != "SEA") {
                    surroundingsRiver += "+E"
                }
            }
        }
        if(surroundingsBridge.includes("+S")) {
            var detectedTerrain = map.getTerrain(terrain.getX(), terrain.getY()+1);
            if(detectedTerrain != null) {
                if(detectedTerrain.getBaseTerrainID() != "SEA") {
                    surroundingsRiver += "+S"
                }
            }
        }
        if(surroundingsBridge.includes("+W")) {
            var detectedTerrain = map.getTerrain(terrain.getX()-1, terrain.getY());
            if(detectedTerrain != null) {
                if(detectedTerrain.getBaseTerrainID() != "SEA") {
                    surroundingsRiver += "+W"
                }
            }
        }

    }
    // load overlay north
    if ((surroundingsRiver.includes("+N"))) {
        var overlay = "riverending";
        overlay += "+N";
        if ((surroundingsSeaDirect.includes("+E")) && surroundingsRiver2.includes("+NE")) {
            overlay += "+NE";
        }
        if ((surroundingsSeaDirect.includes("+W")) && surroundingsRiver2.includes("+NW")) {
            overlay += "+NW";
        }

        terrain.loadOverlaySprite(overlay);
    }
    // load overlay east
    if ((surroundingsRiver.includes("+E"))) {
        var overlay = "riverending";
        if ((surroundingsSeaDirect.includes("+N")) && surroundingsRiver2.includes("+NE")) {
            overlay += "+NE";
        }
        overlay += "+E";

        if ((surroundingsSeaDirect.includes("+S")) && surroundingsRiver2.includes("+SE")) {
            overlay += "+SE";
        }

        terrain.loadOverlaySprite(overlay);
    }
    // load overlay south
    if ((surroundingsRiver.includes("+S"))) {
        var overlay = "riverending";
        if ((surroundingsSeaDirect.includes("+E")) && surroundingsRiver2.includes("+SE")) {
            overlay += "+SE";
        }
        overlay += "+S";

        if ((surroundingsSeaDirect.includes("+W")) && surroundingsRiver2.includes("+SW")) {
            overlay += "+SW";
        }

        terrain.loadOverlaySprite(overlay);
    }
    // load overlay west
    if ((surroundingsRiver.includes("+W"))) {
        var overlay = "riverending";
        if ((surroundingsSeaDirect.includes("+S")) && surroundingsRiver2.includes("+SW")) {
            overlay += "+SW";
        }
        overlay += "+W";

        if ((surroundingsSeaDirect.includes("+N")) && surroundingsRiver2.includes("+NW")) {
            overlay += "+NW";
        }

        terrain.loadOverlaySprite(overlay);
    }
    */
};

SEA.init = function (terrain)
{
    terrain.setVisionHigh(0);
    terrain.setTerrainName(SEA.getName());
};

SEA.getTerrainSprites = function()
{
    // array of sprites that can be selected as fix sprites for this terrain
    return  [
    "sea+E+S+SW+W",
	"sea+E+S+W",
	"sea+E+S",
	"sea+E+SE+S+SW+W",
	"sea+E+SE+S+W",
	"sea+E+SE+S",
	"sea+E+W",
	"sea+E",
	"sea+N+E+S+SW+W+NW",
	"sea+N+E+S+SW+W",
	"sea+N+E+S+W+NW",
	"sea+N+E+S+W",
	"sea+N+E+S",
	"sea+N+E+SE+S+SW+W+NW",
	"sea+N+E+SE+S+SW+W",
	"sea+N+E+SE+S+W+NW",
	"sea+N+E+SE+S+W",
	"sea+N+E+SE+S",
	"sea+N+E+W+NW",
	"sea+N+E+W",
	"sea+N+E",
	"sea+N+NE+E+S+SW+W+NW",
	"sea+N+NE+E+S+SW+W",
	"sea+N+NE+E+S+W+NW",
	"sea+N+NE+E+S+W",
	"sea+N+NE+E+S",
	"sea+N+NE+E+SE+S+SW+W+NW",
	"sea+N+NE+E+SE+S+SW+W",
	"sea+N+NE+E+SE+S+W+NW",
	"sea+N+NE+E+SE+S+W",
	"sea+N+NE+E+SE+S",
	"sea+N+NE+E+W+NW",
	"sea+N+NE+E+W",
	"sea+N+NE+E",
	"sea+N+S+SW+W+NW",
	"sea+N+S+SW+W",
	"sea+N+S+W+NW",
	"sea+N+S+W",
	"sea+N+S",
	"sea+N+W+NW",
	"sea+N+W",
	"sea+N",
	"sea+S+SW+W",
	"sea+S+W",
	"sea+S",
	"sea+W",
    "sea"
    ];
};