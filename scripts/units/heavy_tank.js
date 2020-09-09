HEAVY_TANK.startOfTurn = function(unit)
{
    ACTION_REPLACE_UNIT.perform(unit,"FAI_TANK_BATTLE");
};

HEAVY_TANK.getUnitDamageID = function()
{
    return "FAI_TANK_BATTLE";
};
HEAVY_TANK.getUnitType = function()
{
    return GameEnums.UnitType_Vanilla_Ground;
};