ROCKETTHROWER.startOfTurn = function(unit)
{
    ACTION_REPLACE_UNIT.perform(unit,"FAI_LAUNCHER_RKT");
};

ROCKETTHROWER.getUnitDamageID = function()
{
    return "FAI_LAUNCHER_RKT";
};
ROCKETTHROWER.getUnitType = function()
{
    return GameEnums.UnitType_Vanilla_Ground;
};