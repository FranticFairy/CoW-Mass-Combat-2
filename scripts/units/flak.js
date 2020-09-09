FLAK.startOfTurn = function(unit)
{
    ACTION_REPLACE_UNIT.perform(unit,"FAI_SUPP_SPAA");
};

FLAK.getUnitDamageID = function()
{
    return "FAI_SUPP_SPAA";
};
FLAK.getUnitType = function()
{
    return GameEnums.UnitType_Vanilla_Ground;
};