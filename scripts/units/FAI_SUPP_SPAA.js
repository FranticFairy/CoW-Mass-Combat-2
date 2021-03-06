var Constructor = function()
{
    this.init = function(unit)
    {
        unit.setMinRange(1);
        unit.setMaxRange(1);
        unit.setWeapon1ID("WEP_FAI_AUTOCAN_AA");

        unit.setAmmo1(8);
        unit.setMaxAmmo1(8);

        unit.setFuel(70);
        unit.setMaxFuel(70);
        unit.setBaseMovementPoints(6);
        unit.setVision(2);
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
        return "MOVE_FAI_TREAD";
    };
    this.getBaseCost = function()
    {
        return 8000;
    };
    this.getName = function()
    {
        return qsTr("Mobile Anti-Air")
    };
    this.canMoveAndFire = function()
    {
        return true;
    };
    this.getDescription = function()
    {
        return qsTr("Enemy got too many Helicopters and Planes around? Get a Self-Propelled Anti-Aircraft Gun! It tears Helicopters, Planes, Infantry, and sometimes even Light Vehicles to shreds! Anything with decent armour can be an issue though...");
    };
    this.getUnitType = function()
    {
        return GameEnums.UnitType_Support;
    };
}

Constructor.prototype = UNIT;
var FAI_SUPP_SPAA = new Constructor();
