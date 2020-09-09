MECH.startOfTurn = function(unit)
{
    ACTION_REPLACE_UNIT.perform(unit,"FAI_IFV_HEAVY");
};

MECH.getUnitDamageID = function()
{
    return "FAI_IFV_HEAVY";
};
MECH.getUnitType = function()
{
    return GameEnums.UnitType_Vanilla_Infantry;
};