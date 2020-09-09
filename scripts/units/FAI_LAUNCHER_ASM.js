var Constructor = function()
{
    this.init = function(unit)
    {
        unit.setWeapon1ID("WEP_FAI_ASM");
        unit.setMinRange(2);
        unit.setMaxRange(4);
        unit.setAmmo1(4);
        unit.setMaxAmmo1(4);

        unit.setFuel(70);
        unit.setMaxFuel(70);
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
        animation.setSound("truck.wav", -2, "mods/MassCombat2/sounds/");
        return animation;
    };
    this.getMovementType = function()
    {
        return "MOVE_FAI_WHEEL";
    };
    this.getBaseCost = function()
    {
        return 13000;
    };
    this.getName = function()
    {
        return qsTr("ASM Launcher")
    };
    this.canMoveAndFire = function()
    {
        return false;
    };
    this.getDescription = function()
    {
        return qsTr("For too long Ships were difficult to sink from the land. Not anymore! With the ASM Launcher you can make any admiral think twice about getting close!");
    };
    this.getUnitType = function()
    {
        return GameEnums.UnitType_Support;
    };
}

Constructor.prototype = UNIT;
var FAI_LAUNCHER_ASM = new Constructor();
