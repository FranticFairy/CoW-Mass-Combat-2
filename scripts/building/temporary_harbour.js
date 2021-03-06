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
        animation.addBuildingSprite("harbour+mask", startColor , capturedColor, true);
        animation.addBuildingSprite("harbour", startColor , capturedColor, false);
    };
    this.getName = function()
    {
        return qsTr("Temporary Harbour");
    };
    this.getBaseTerrain = function(building)
    {
        return ["BEACH"];
    };
    this.getActions = function()
    {
        // returns a string id list of the actions this building can perform
        return "";
    };
    this.getBaseIncome = function()
    {
        return 0;
    };
    this.getConstructionList = function(building)
    {
        return ["FAI_SHIP_LCA","FAI_SHIP_FRIGATE","FAI_SHIP_BATTLESHIP","FAI_SHIP_CARRIER","FAI_SHIP_CRUISER","FAI_SHIP_DESTROYER","FAI_SHIP_TRANS","FAI_SHIP_SUBMARINE","FAI_HOVERCRAFT","FAI_HOVER_HEAVY","FAI_HOVER_TRANS","FAI_SHIP_EKRANOPLAN","FAI_PLANE_SEAPLANE","FAI_CASH_SHIP","FAI_SHIP_ORLYONOK","FAI_SHIP_SUPPLY","FAI_SHIP_SWEEP"];
    };
    this.getTerrainAnimationForeground = function(unit, terrain)
    {
        return "fore_harbour";
    };

    this.getTerrainAnimationBackground = function(unit, terrain)
    {
        return "back_harbour";
    };
    this.getDefense = function()
    {
        return 1;
    };
    this.getDescription = function()
    {
        return "<r>" + qsTr("Harbour made by APC. ") + "</r>" +
               "<div c='#00ff00'>" + qsTr("Resupplying ") + "</div>" +
               "<r>" + qsTr("of ") + "</r>" +
               "<div c='#00ff00'>" + qsTr("naval ") + "</div>"+
               "<r>" + qsTr("units is possible.") + "</r>";
    };

    this.getRepairTypes = function(building)
    {
        return [GameEnums.UnitType_Naval, GameEnums.UnitType_Ekranoplan, GameEnums.UnitType_Hovercraft];
    };
}

Constructor.prototype = BUILDING;
var TEMPORARY_HARBOUR = new Constructor();
