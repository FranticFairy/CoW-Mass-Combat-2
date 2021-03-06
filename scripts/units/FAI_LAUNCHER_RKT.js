var Constructor = function()
{
    this.init = function(unit)
    {
        unit.setWeapon1ID("WEP_FAI_ROCKETS");
        unit.setMinRange(3);
        unit.setMaxRange(5);
        unit.setAmmo1(5);
        unit.setMaxAmmo1(5);

        unit.setFuel(70);
        unit.setMaxFuel(70);
        unit.setBaseMovementPoints(4);
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
        animation.setSound("truck.wav", -2, "mods/MassCombat2/sounds/");
        return animation;
    };
    this.getMovementType = function()
    {
        return "MOVE_FAI_WHEEL";
    };
    this.getBaseCost = function()
    {
        return 15000;
    };
    this.getName = function()
    {
        return qsTr("Rocket Launcher")
    };
    this.canMoveAndFire = function()
    {
        return false;
    };
    this.getDescription = function()
    {
        return qsTr("Gun-based artillery not good enough for you? Try rockets! Bring lots of pain to large areas!");
    };
    this.getUnitType = function()
    {
        return GameEnums.UnitType_Support;
    };
}

Constructor.prototype = UNIT;
var FAI_LAUNCHER_RKT = new Constructor();
