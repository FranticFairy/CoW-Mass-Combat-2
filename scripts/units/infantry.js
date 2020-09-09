INFANTRY.startOfTurn = function(unit)
{
    ACTION_REPLACE_UNIT.perform(unit,"FAI_TRANS_HALFT");
};

INFANTRY.getUnitDamageID = function()
{
    return "FAI_TRANS_HALFT";
};

INFANTRY.getUnitType = function()
{
    return GameEnums.UnitType_Vanilla_Infantry;
};