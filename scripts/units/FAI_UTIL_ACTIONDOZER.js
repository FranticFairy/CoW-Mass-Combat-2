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
        unit.setBaseMovementPoints(0);
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
    this.getMovementType = function()
    {
        return "MOVE_FAI_LIGHT_TREAD";
    };
    this.getBaseCost = function()
    {
        return 0;
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
        return qsTr("Work is being done here! This unit is a placeholder to handle certain functions~.");
    };
    this.getUnitType = function()
    {
        return GameEnums.UnitType_Support;
    };
}

Constructor.prototype = UNIT;
var FAI_UTIL_ACTIONDOZER = new Constructor();
