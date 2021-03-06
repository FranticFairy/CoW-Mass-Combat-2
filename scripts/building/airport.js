var Constructor = function()
{
    // called for loading the main sprite
    this.loadSprites = function(building, neutral)
    {
        var buildingID = building.getBuildingID().toLowerCase();
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
    };

    this.addCaptureAnimationBuilding = function(animation, building, startColor, capturedColor)
    {
        animation.addBuildingSprite("airport+mask", startColor , capturedColor, true);
        animation.addBuildingSprite("airport", startColor , capturedColor, false);
    };
    this.getName = function()
    {
        return qsTr("Airport");
    };
    this.getActions = function()
    {
        // returns a string id list of the actions this building can perform
        return "ACTION_BUILD_UNITS";
    };

    this.getConstructionList = function(building)
    {
        return ["FAI_HELI_GUNSHIP","FAI_HELI_VHC","FAI_PLANE_SEAPLANE","FAI_PLANE_FIGHTER","FAI_PLANE_STEALTHFIGHTER","FAI_PLANE_AEWC","FAI_PLANE_BOMBER","FAI_PLANE_TANKBUSTER","FAI_PLANE_NAVJET","FAI_PLANE_STEALTHBOMBER","FAI_PLANE_TRANS","FAI_CASH_PLANE"];
    };

    this.getTerrainAnimationForeground = function(unit, terrain)
    {
        return "fore_airport";
    };

    this.getTerrainAnimationBackground = function(unit, terrain)
    {
        return "back_airport";
    };

    this.getDescription = function()
    {
        return "<r>" + qsTr("Once captured can be used for ") + "</r>" +
               "<div c='#00ff00'>" + qsTr("production and resupplying") + "</div>" +
               "<r>" + qsTr(" of ") + "</r>" +
               "<div c='#00ff00'>" + qsTr("air") + "</div>" +
               "<r>" + qsTr(" units.") + "</r>";
    };

    this.getRepairTypes = function(building)
    {
        return [GameEnums.UnitType_Air, GameEnums.UnitType_Helicopter];
    };
}

Constructor.prototype = BUILDING;
var AIRPORT = new Constructor();
