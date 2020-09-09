var Constructor = function()
{
    // called for loading the main sprite
    this.loadSprites = function(building, neutral)
    {
        if(typeof map !== 'undefined') {
            var terrain = map.getTerrain(building.getX(), building.getY());
            if(map != null && terrain != null) {
                var surroundings = terrain.getSurroundings("URBAN,STREET,BRIDGE,STATION,TOWN,HQ,FACTORY,AIRPORT,HARBOUR,STATION",
                                                           false, false, GameEnums.Directions_Direct, true, true);
                if(surroundings.includes("+") == false){
                    surroundings == "";
                }
                surroundings = ""; //Remove for 32x32
                if (building.getOwnerID() >= 0 && !neutral)
                {
                    // none neutral player
                    building.loadSprite("town"+ surroundings, false);
                    building.loadSpriteV2("town"+ surroundings + "+mask", GameEnums.Recoloring_Table);
                }
                else
                {
                    // neutral player
                    building.loadSprite("town"+ surroundings + "+neutral", false);
                }
            } else {
                if (building.getOwnerID() >= 0 && !neutral)
                {
                    // none neutral player
                    building.loadSprite("town", false);
                    building.loadSpriteV2("town+mask", GameEnums.Recoloring_Table);
                }
                else
                {
                    // neutral player
                    building.loadSprite("town+neutral", false);
                }
            }
        } else {
            if (building.getOwnerID() >= 0 && !neutral)
            {
                // none neutral player
                building.loadSprite("town", false);
                building.loadSpriteV2("town+mask", GameEnums.Recoloring_Table);
            }
            else
            {
                // neutral player
                building.loadSprite("town+neutral", false);
            }
        }
    };
    this.getConstructionList = function(building)
    {
        return ["FAI_SUPP_SECURITY","FAI_SUPP_GUERILLA","FAI_UTIL_SUPPLY","FAI_TRANS_HALFT","FAI_IFV","FAI_IFV_AMPHI","FAI_IFV_HEAVY","FAI_GUN_ARTY","FAI_GUN_AT","FAI_TANK_LIGHT","FAI_TANK_BATTLE","FAI_TANK_HEAVY","FAI_SUPP_SPAA","FAI_SUPP_SPARTY","FAI_LAUNCHER_SAM","FAI_LAUNCHER_WMD","FAI_LAUNCHER_RKT","FAI_LAUNCHER_ASM","FAI_SUPP_RECON","FAI_SUPP_ARMORCAR","FAI_TANK_HOVER","FAI_HOVERCRAFT","FAI_HOVER_HEAVY","FAI_HOVER_TRANS","FAI_UTIL_AVLB","FAI_UTIL_ARV","FAI_UTIL_DOZER","FAI_CASH_TRUCK","FAI_TANK_SWEEP"];
    };

    this.getName = function()
    {
        return qsTr("Town");
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
}

Constructor.prototype = BUILDING;
var TOWN = new Constructor();
