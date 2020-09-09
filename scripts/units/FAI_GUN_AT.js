var Constructor = function()
{
    this.init = function(unit)
    {
        unit.setWeapon1ID("WEP_FAI_TANKGUN_AT");

        unit.setAmmo1(5);
        unit.setMaxAmmo1(5);
        unit.setFuel(99);
        unit.setMaxFuel(99);
        unit.setBaseMovementPoints(2);
        unit.setVision(1)
        unit.setMinRange(1);
        unit.setMaxRange(2);
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
    this.getMovementType = function()
    {
        return "MOVE_FAI_TOWED";
    };
    this.getBaseCost = function()
    {
        return 6500;
    };
    this.getName = function()
    {
        return qsTr("Field Anti-Tank")
    };
    this.canMoveAndFire = function()
    {
        return false;
    };
    this.getDescription = function()
    {
        return qsTr("These guns are a pain for enemy armor to deal with, as they often take them off-guard and shoot first. Vulnerable to infantry.");
    };
    this.getUnitType = function()
    {
        return 104;
    };
}

Constructor.prototype = UNIT;
var FAI_GUN_AT = new Constructor();
