var Constructor = function()
{
    this.getTerrainGroup = function()
    {
        return 1;
    };
    // loader for stuff which needs C++ Support
    this.init = function (terrain)
    {
        terrain.setTerrainName(DUNGEON.getName());
        terrain.setVisionHigh(0);
    };
    this.getName = function()
    {
        return qsTr("Underground Fortress");
    };
    this.getDefense = function()
    {
        return 1;
    };
    this.loadBaseTerrain = function (terrain, currentTerrainID) {
        terrain.loadBaseTerrain("TELEPORTTILE");
    };
    this.loadBaseSprite = function (terrain) {
        var surroundings = terrain.getSurroundings("PLAINS,DESERT,SNOW,STREET,TELEPORTTILE,CAVE,DUNGEON,RIVER", true, false, GameEnums.Directions_All, true, true);
        var surroundingsDirect = terrain.getSurroundings("PLAINS,DESERT,SNOW,STREET,TELEPORTTILE,CAVE,DUNGEON,RIVER", true, false, GameEnums.Directions_Direct, true, true);
        // var surroundingsSea = terrain.getSurroundings("PLAINS,DESERT,SNOW,STREET,TELEPORTTILE,CAVE", true, false, GameEnums.Directions_All);
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
    
    
        if (!(surroundings.includes("+N"))) {
            var surroundingsN = terrain.getSurroundings("SEA", true, false, GameEnums.Directions_North);
            if (surroundingsN === "+N") {
                surroundings = surroundings.replace("+N", "");
            }
        }
    
        if (!(surroundings.includes("+S"))) {
            var surroundingsS = terrain.getSurroundings("SEA", true, false, GameEnums.Directions_South);
            if (surroundingsS === "+S") {
                surroundings = surroundings.replace("+S", "");
            }
        }
    
        if ((surroundings.includes("+E"))) {
            var surroundingsE = terrain.getSurroundings("SEA", true, false, GameEnums.Directions_South);
            if (surroundingsE === "+E") {
                surroundings = surroundings.replace("+E", "");
            }
        }
        if ((surroundings.includes("+W"))) {
            var surroundingsW = terrain.getSurroundings("SEA", true, false, GameEnums.Directions_South);
            if (surroundingsW === "+W") {
                surroundings = surroundings.replace("+W", "");
            }
        }
        terrain.loadBaseSprite("dungeon" + surroundings);
        } else {
            terrain.loadBaseSprite("dungeon");
        }
    };
    this.getMiniMapIcon = function()
    {
        return "minimap_farmland";
    };
    
    this.getTerrainAnimationForeground = function(unit, terrain)
    {
        return "fore_farm";
    };

    this.getDescription = function()
    {
        return "<r>" + qsTr("Rural farmland. Provides some cover, but not much.") + "</r>";
    };

    this.getTerrainSprites = function()
    {
        // array of sprites that can be selected as fix sprites for this terrain
        return ["farmland"];
    };
};
Constructor.prototype = TERRAIN;
var DUNGEON = new Constructor();
