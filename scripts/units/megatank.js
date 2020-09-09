MEGATANK.startOfTurn = function(unit)
{
    ACTION_REPLACE_UNIT.perform(unit,"FAI_TANK_HEAVY");
};

MEGATANK.getUnitDamageID = function()
{
    return "FAI_TANK_HEAVY";
};
MEGATANK.getUnitType = function()
{
    return GameEnums.UnitType_Vanilla_Ground;
};