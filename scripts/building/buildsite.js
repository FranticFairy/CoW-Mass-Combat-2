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
    this.getConstructionList = function(building)
    {
        return ["FAI_SUPP_SECURITY","FAI_SUPP_GUERILLA","FAI_UTIL_SUPPLY","FAI_TRANS_HALFT","FAI_IFV","FAI_IFV_AMPHI","FAI_IFV_HEAVY","FAI_GUN_ARTY","FAI_GUN_AT","FAI_TANK_LIGHT","FAI_TANK_BATTLE","FAI_TANK_HEAVY","FAI_SUPP_SPAA","FAI_SUPP_SPARTY","FAI_LAUNCHER_SAM","FAI_LAUNCHER_WMD","FAI_LAUNCHER_RKT","FAI_LAUNCHER_ASM","FAI_SUPP_RECON","FAI_SUPP_ARMORCAR","FAI_TANK_HOVER","FAI_HOVERCRAFT","FAI_HOVER_HEAVY","FAI_HOVER_TRANS","FAI_UTIL_AVLB","FAI_UTIL_ARV","FAI_UTIL_DOZER","FAI_CASH_TRUCK","FAI_TANK_SWEEP"];
    };

    this.getName = function()
    {
        return qsTr("Build Site");
    };

    this.getDescription = function()
    {
        return qsTr("<r>" + "Populated city. Once captured </r><div c='#00ff00'>ground </div><r>units can </r><div c='#00ff00'>resupply</div><r>.</r>");
    };

    this.getVisionHide = function(building)
    {
        return true;
    };

    this.getRepairTypes = function(building)
    {
        return [GameEnums.UnitType_Ground, GameEnums.UnitType_Hovercraft, GameEnums.UnitType_Infantry, GameEnums.UnitType_Tank, GameEnums.UnitType_Support];
    };

    this.getActions = function()
    {
        // returns a string id list of the actions this building can perform
        return "ACTION_BUILD_UPGRADE";
    };
}

Constructor.prototype = BUILDING;
var BUILDSITE = new Constructor();
