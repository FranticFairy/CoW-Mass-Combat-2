var Constructor = function()
{
    this.init = function(unit)
    {
        unit.setMinRange(1);
        unit.setMaxRange(1);
        unit.setWeapon1ID("WEP_FAI_MG_MMG");

        unit.setWeapon2ID("WEP_FAI_MINE");
        unit.setAmmo2(1);
        unit.setMaxAmmo2(1);

        unit.setAmmo1(10);
        unit.setMaxAmmo1(10);
        unit.setFuel(99);
        unit.setMaxFuel(99);
        unit.setBaseMovementPoints(5);
        unit.setVision(5)
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
        animation.setSound("recon.wav", -2, "mods/MassCombat2/sounds/");
        return animation;
    };
    this.getMovementType = function()
    {
        return "MOVE_FAI_LIGHT_WHEEL";
    };
    this.getBaseCost = function()
    {
        return 1500;
    };
    this.getName = function()
    {
        return qsTr("Guerilla Forces")
    };
    this.getActions = function()
    {
        // returns a string id list of the actions this unit can perform
        return "ACTION_FIRE,ACTION_CAPTURE_GUERILLA,ACTION_PLACE_LANDMINE,ACTION_JOIN,ACTION_LOAD,ACTION_UNLOAD,ACTION_WAIT";
    };
    this.canMoveAndFire = function()
    {
        return true;
    };
    this.getDescription = function()
    {
        return qsTr("Partisans, Resistance fighters, and other disgruntled citizens and ex-soldiers useful for fighting asymmetrical war against your enemy. They turn enemy buildings neutral, and are stealthed if they end their turn on Forests.");
    };
    this.getUnitType = function()
    {
        return GameEnums.UnitType_Infantry;
    };
}

Constructor.prototype = UNIT;
var FAI_SUPP_GUERILLA = new Constructor();
