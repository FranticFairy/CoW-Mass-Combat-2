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
    this.getName = function()
    {
        return qsTr("Labor");
    };
    this.getActions = function()
    {
        // returns a string id list of the actions this building can perform
        return "ACTION_BUILD_UNITS";
    };

    this.getConstructionList = function(building)
    {
        return ["FAI_TANK_HOVER","FAI_HOVERCRAFT","FAI_HOVER_HEAVY","FAI_TANK_MECH","FAI_OTH_OGRE,FAI_TITAN_CORE"];
    };

    this.getDescription = function()
    {
        return "<r>" + qsTr("Once captured can be used for ") + "</r>" +
               "<div c='#00ff00'>" + qsTr("production") + "</div>" +
               "<r>" + qsTr(" of ") + "</r>" +
               "<div c='#00ff00'>" + qsTr("oozium") + " </div>" +
               "<r>" + qsTr("units.") + "</r>";
    };
}

Constructor.prototype = BUILDING;
var LABOR = new Constructor();
