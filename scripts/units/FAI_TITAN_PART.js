var Constructor = function()
{
    this.init = function(unit)
    {
        unit.setMinRange(1);
        unit.setMaxRange(2);
        unit.setWeapon1ID("WEP_FAI_ARTY_HVY");
        unit.setAmmo1(9);
        unit.setMaxAmmo1(9);
        
        unit.setFuel(70);
        unit.setMaxFuel(70);
        unit.setBaseMovementPoints(0);
        unit.setVision(1);

    };
    this.startOfTurn = function(unit)
    {

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
        animation.setSound("tank.wav", -2, "mods/MassCombat2/sounds/");
        return animation;
    };
    this.getMovementType = function()
    {
        return "MOVE_FAI_TITAN";
    };
    this.getBaseCost = function()
    {
        return 35000;
    };
    this.getName = function()
    {
        return qsTr("Titan Part")
    };
    this.canMoveAndFire = function()
    {
        return true;
    };
    this.getDescription = function()
    {
        return qsTr("Part of a Titan, armed with Artillery Cannons. Destroy to weaken the Titan Core.");
    };
    this.getUnitType = function()
    {
        return GameEnums.UnitType_Super;
    };
}

Constructor.prototype = UNIT;
var FAI_TITAN_PART = new Constructor();
