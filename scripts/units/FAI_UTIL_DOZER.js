var Constructor = function()
{
    this.init = function(unit)
    {
        unit.setAmmo1(1);
        unit.setMaxAmmo1(1);
        unit.setWeapon1ID("");
        unit.setWeapon2ID("WEP_FAI_MINE");
        unit.setAmmo2(1);
        unit.setMaxAmmo2(1);
        
        unit.setFuel(80);
        unit.setMaxFuel(80);
        unit.setBaseMovementPoints(5);
        unit.setVision(1)
    };
    // called for loading the main sprite
    this.loadSprites = function(unit)
    {
        // load sprites
        var unitID = unit.getUnitID().toLowerCase();
        unit.loadSprite(unitID, false);
        unit.loadSpriteV2(unitID + "+mask", GameEnums.Recoloring_Table);
    };
    this.doWalkingAnimation = function(action)
    {
        var unit = action.getTargetUnit();
        var animation = GameAnimationFactory.createWalkingAnimation(unit, action);
        var unitID = unit.getUnitID().toLowerCase();
        animation.loadSpriteV2(unitID + "+mask", GameEnums.Recoloring_Table, 1);
        animation.loadSprite(unitID, false, 1);
        animation.setSound("ifv.wav", -2, "mods/MassCombat2/sounds/");
        return animation;
    };
    this.getActions = function()
    {
        // returns a string id list of the actions this unit can perform
        return "ACTION_BUILD_TEMP_AIRPORT,ACTION_BUILD_TEMP_HARBOUR,ACTION_PLACE_LANDMINE,ACTION_PLACE_TRENCH,ACTION_PLACE_TANKDITCH,ACTION_PLACE_TANKTRAPS,ACTION_PLACE_FILLIN,ACTION_PLACE_CLEAR,ACTION_JOIN,ACTION_LOAD,ACTION_UNLOAD,ACTION_WAIT";
    };
    this.getMovementType = function()
    {
        return "MOVE_FAI_LIGHT_TREAD";
    };
    this.getBaseCost = function()
    {
        return 5500;
    };
    this.getName = function()
    {
        return qsTr("Dozer")
    };
    this.canMoveAndFire = function()
    {
        return true;
    };
    this.getDescription = function()
    {
        return qsTr("For building frontline structures, lightly-armoured dozers are your best bet. Though they don't last particularly long, they often last just long enough to get the job done..");
    };
    this.getUnitType = function()
    {
        return GameEnums.UnitType_Support;
    };
}

Constructor.prototype = UNIT;
var FAI_UTIL_DOZER = new Constructor();
