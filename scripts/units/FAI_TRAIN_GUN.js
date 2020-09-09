var Constructor = function()
{
    this.init = function(unit)
    {
        unit.setWeapon1ID("WEP_FAI_RAILWAYGUN");

        unit.setMinRange(3);
        unit.setMaxRange(7);
        unit.setAmmo1(3);
        unit.setMaxAmmo1(3);

        unit.setFuel(99);
        unit.setMaxFuel(99);
        unit.setBaseMovementPoints(4);
        unit.setVision(1)
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
        animation.setSound("train.wav", -2, "mods/MassCombat2/sounds/");
        return animation;
    };
    this.getMovementType = function()
    {
        return "MOVE_FAI_RAIL";
    };
    this.getBaseCost = function()
    {
        return 16000;
    };
    this.getName = function()
    {
        return qsTr("Railway Gun")
    };
    this.canMoveAndFire = function()
    {
        return false;
    };
    this.getDescription = function()
    {
        return qsTr("For shooting from far, far, far away. Railway Guns die easily to direct attacks, but they can hit the enemy long before the enemy can shoot back!");
    };
    this.getUnitType = function()
    {
        return GameEnums.UnitType_Train;
    };
}

Constructor.prototype = UNIT;
var FAI_TRAIN_GUN = new Constructor();
