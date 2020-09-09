TRANSPORTPLANE.startOfTurn = function(unit)
{
    ACTION_REPLACE_UNIT.perform(unit,"FAI_PLANE_TRANS");
};

TRANSPORTPLANE.getUnitDamageID = function()
{
    return "FAI_PLANE_TRANS";
};
TRANSPORTPLANE.getUnitType = function()
{
    return GameEnums.UnitType_Vanilla_Air;
};