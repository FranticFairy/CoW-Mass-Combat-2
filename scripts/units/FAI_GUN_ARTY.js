var Constructor = function()
{
    this.init = function(unit)
    {
        unit.setWeapon1ID("WEP_FAI_ARTY_HVY");

        unit.setMinRange(2);
        unit.setMaxRange(4);
        unit.setAmmo1(5);
        unit.setMaxAmmo1(5);

        unit.setFuel(99);
        unit.setMaxFuel(99);
        unit.setBaseMovementPoints(2);
        unit.setVision(1);
    };
    this.canAttackStealthedUnit = function(attacker, defender) 
    {
        var defenderID = defender.getUnitID()
        if (defenderID != "FAI_SHIP_SUBMARINE")
        {
            return true;
        }
        return false;
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
        return "MOVE_FAI_LIGHT_TOWED";
    };
    this.getBaseCost = function()
    {
        return 7500;
    };
    this.getName = function()
    {
        return qsTr("Heavy Field Artillery")
    };
    this.canMoveAndFire = function()
    {
        return false;
    };
    this.getDescription = function()
    {
        return qsTr("The second-biggest land based conventional guns, these heavy weapons can hurt even warships, but are vulnerable to infantry attack.");
    };
    this.getUnitType = function()
    {
        return 104;
    };
}

Constructor.prototype = UNIT;
var FAI_GUN_ARTY = new Constructor();
