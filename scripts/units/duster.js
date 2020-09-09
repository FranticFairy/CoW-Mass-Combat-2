DUSTER.startOfTurn = function(unit)
{
    ACTION_REPLACE_UNIT.perform(unit,"FAI_PLANE_SEAPLANE");
};

DUSTER.getUnitDamageID = function()
{
    return "FAI_PLANE_SEAPLANE";
};
DUSTER.getUnitType = function()
{
    return GameEnums.UnitType_Vanilla_Air;
};