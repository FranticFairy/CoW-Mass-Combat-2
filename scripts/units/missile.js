MISSILE.startOfTurn = function(unit)
{
    ACTION_REPLACE_UNIT.perform(unit,"FAI_LAUNCHER_SAM");
};

MISSILE.getUnitDamageID = function()
{
    return "FAI_LAUNCHER_SAM";
};
MISSILE.getUnitType = function()
{
    return GameEnums.UnitType_Vanilla_Ground;
};