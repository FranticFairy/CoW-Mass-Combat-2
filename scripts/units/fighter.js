FIGHTER.startOfTurn = function(unit)
{
    ACTION_REPLACE_UNIT.perform(unit,"FAI_PLANE_FIGHTER");
};

FIGHTER.getUnitDamageID = function()
{
    return "FAI_PLANE_FIGHTER";
};
FIGHTER.getUnitType = function()
{
    return GameEnums.UnitType_Vanilla_Air;
};