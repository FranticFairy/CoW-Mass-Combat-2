STEALTHBOMBER.startOfTurn = function(unit)
{
    ACTION_REPLACE_UNIT.perform(unit,"FAI_PLANE_STEALTHBOMBER");
};

STEALTHBOMBER.getUnitDamageID = function()
{
    return "FAI_PLANE_STEALTHBOMBER";
};
STEALTHBOMBER.getUnitType = function()
{
    return GameEnums.UnitType_Vanilla_Air;
};