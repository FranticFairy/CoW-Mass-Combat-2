WATERPLANE.startOfTurn = function(unit)
{
    ACTION_REPLACE_UNIT.perform(unit,"FAI_PLANE_NAVJET");
};

WATERPLANE.getUnitDamageID = function()
{
    return "FAI_PLANE_NAVJET";
};
WATERPLANE.getUnitType = function()
{
    return GameEnums.UnitType_Vanilla_Air;
};