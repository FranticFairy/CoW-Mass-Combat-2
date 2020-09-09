BOMBER.startOfTurn = function(unit)
{
    ACTION_REPLACE_UNIT.perform(unit,"FAI_PLANE_BOMBER");
};

BOMBER.getUnitDamageID = function()
{
    return "FAI_PLANE_BOMBER";
};
BOMBER.getUnitType = function()
{
    return GameEnums.UnitType_Vanilla_Air;
};