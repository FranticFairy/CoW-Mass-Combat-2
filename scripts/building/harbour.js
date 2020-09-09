var Constructor = function()
{
    // called for loading the main sprite
    this.loadSprites = function(building, neutral)
    {
        var buildingID = building.getBuildingID().toLowerCase();
        if(typeof map !== 'undefined') {
            var terrain = map.getTerrain(building.getX(), building.getY());
            if(terrain != null) {
                var surroundings = terrain.getSurroundings("SEA,HARBOUR,REAF,FOG,ROUGH_SEA,BEACH",
                                                           false, false, GameEnums.Directions_Direct, true, true);
                surroundings = ""; //Remove for 32x32
                if (building.getOwnerID() >= 0 && !neutral)
                {
                    // none neutral player
                    building.loadSprite(buildingID+ surroundings, false);
                    building.loadSpriteV2(buildingID+ surroundings + "+mask", GameEnums.Recoloring_Table);
                }
                else
                {
                    // neutral player
                    building.loadSprite(buildingID + surroundings + "+neutral", false);
                }
            } else {
                if (building.getOwnerID() >= 0 && !neutral)
                {
                    // none neutral player
                    building.loadSprite(buildingID, false);
                    building.loadSpriteV2(buildingID + "+mask", GameEnums.Recoloring_Table);
                }
                else
                {
                    // neutral player
                    building.loadSprite(buildingID + "+neutral", false);
                }
            }
        } else {
            if (building.getOwnerID() >= 0 && !neutral)
            {
                // none neutral player
                building.loadSprite(buildingID, false);
                building.loadSpriteV2(buildingID + "+mask", GameEnums.Recoloring_Table);
            }
            else
            {
                // neutral player
                building.loadSprite(buildingID + "+neutral", false);
            }
        }
    };
    this.addCaptureAnimationBuilding = function(animation, building, startColor, capturedColor)
    {
        animation.addBuildingSprite("harbour+mask", startColor , capturedColor, true);
        animation.addBuildingSprite("harbour", startColor , capturedColor, false);
    };
    this.getName = function()
    {
        return qsTr("Harbour");
    };

    this.getActions = function()
    {
        // returns a string id list of the actions this building can perform
        return "ACTION_BUILD_UNITS";
    };
    this.getConstructionList = function(building)
    {
        return ["FAI_SHIP_FRIGATE","FAI_SHIP_DESTROYER","FAI_SHIP_CRUISER","FAI_SHIP_SUBMARINE","FAI_SHIP_BATTLESHIP","FAI_SHIP_CARRIER","FAI_SHIP_LCA","FAI_SHIP_TRANS","FAI_SHIP_SUPPLY","FAI_HOVERCRAFT","FAI_HOVER_TRANS","FAI_SHIP_ORLYONOK","FAI_SHIP_EKRANOPLAN","FAI_CASH_SHIP","FAI_SHIP_SWEEP","FAI_PLANE_SEAPLANE"];
    };
    this.getTerrainAnimationForeground = function(unit, terrain)
    {
        return "fore_harbour";
    };

    this.getTerrainAnimationBackground = function(unit, terrain)
    {
        return "back_harbour";
    };

    this.getDescription = function()
    {
        return "<r>" + qsTr("Once captured can be used for ") + "</r>" +
               "<div c='#00ff00'>" + qsTr("production and resupplying ") + "</div>" +
               "<r>" + "of " + "</r>" +
               "<div c='#00ff00'>"+ qsTr("naval ") + "</div>"+
               "<r>" + "units." + "</r>";
    };

    this.getRepairTypes = function(building)
    {
        return [GameEnums.UnitType_Naval, GameEnums.UnitType_Ekranoplan, GameEnums.UnitType_Hovercraft];
    };
}

Constructor.prototype = BUILDING;
var HARBOUR = new Constructor();
