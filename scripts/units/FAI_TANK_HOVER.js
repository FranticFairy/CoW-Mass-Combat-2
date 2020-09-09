var Constructor = function()
{
    this.init = function(unit)
    {
        unit.setWeapon1ID("WEP_FAI_TANKGUN");
        unit.setWeapon2ID("WEP_FAI_MG_VMG");

        unit.setMinRange(1);
        unit.setMaxRange(1);
        unit.setAmmo1(9);
        unit.setMaxAmmo1(9);
        unit.setAmmo2(10);
        unit.setMaxAmmo2(10);
        unit.setFuel(70);
        unit.setMaxFuel(70);
        unit.setBaseMovementPoints(6);
        unit.setVision(2)
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
        animation.setSound("hovertank.wav", -2, "mods/MassCombat2/sounds/");
        return animation;
    };
    this.getMovementType = function()
    {
        return "MOVE_FAI_HOVTANK";
    };
    this.getBaseCost = function()
    {
        return 12000;
    };
    this.getName = function()
    {
        return qsTr("Hovertank")
    };
    this.canMoveAndFire = function()
    {
        return true;
    };
    this.getDescription = function()
    {
        return qsTr("An experimental vehicle, Hovertanks aren't much stronger than regular tanks, but they traverse difficult terrain without issue!");
    };
    this.getUnitType = function()
    {
        return GameEnums.UnitType_Tank;
    };
}

Constructor.prototype = UNIT;
var FAI_TANK_HOVER = new Constructor();
