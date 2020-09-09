var Constructor = function()
{
    this.init = function(unit)
    {
        unit.setFuel(70);
        unit.setMaxFuel(70);
        unit.setBaseMovementPoints(6);
        unit.setVision(2);
        unit.setVisionHigh(10);
    };
    this.startOfTurn = function(unit)
    {
        // pay unit upkeep
        var fuelCosts = 2 + unit.getFuelCostModifier(Qt.point(unit.getX(), unit.getY()), 2);
        if (fuelCosts < 0)
        {
            fuelCosts = 0;
        }
        unit.setFuel(unit.getFuel() - fuelCosts);
    };
    this.createExplosionAnimation = function(x, y, unit)
    {
        var animation = GameAnimationFactory.createAnimation(x, y);
        animation.addSprite("explosion+air", -map.getImageSize() / 2, -map.getImageSize(), 0, 1.5);
        audio.playSound("explosion+air.wav");
        return animation;
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
        animation.setSound("helo.wav", -2, "mods/MassCombat2/sounds/");
        return animation;
    };
    this.getMovementType = function()
    {
        return "MOVE_FAI_AIR";
    };
    this.useTerrainDefense = function()
    {
        return false;
    };

    this.getTerrainAnimationBase = function(unit, terrain)
    {
        return "base_air";
    };

    this.getTerrainAnimationForeground = function(unit, terrain)
    {
        return "";
    };

    this.getTerrainAnimationBackground = function(unit, terrain)
    {
        return "";
    };
    this.getBaseCost = function()
    {
        return 7000;
    };
    this.getLoadingPlace = function()
    {
        return 1;
    };
    this.getTransportUnits = function()
    {
        return ["FAI_SUPP_SECURITY","FAI_SUPP_GUERILLA","FAI_IFV","FAI_IFV_AMPHI","FAI_TRANS_HALFT"];
    };
    this.getName = function()
    {
        return qsTr("Infantry Helicopter")
    };
    this.canMoveAndFire = function()
    {
        return true;
    };
    this.getDescription = function()
    {
        return qsTr("A very useful unit for getting your soldiers where they need to go quickly. These helicopters lack weaponry, however...");
    };
    this.getUnitType = function()
    {
        return GameEnums.UnitType_Helicopter;
    };
}

Constructor.prototype = UNIT;
var FAI_HELI_INF = new Constructor();
