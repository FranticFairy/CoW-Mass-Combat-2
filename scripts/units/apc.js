APC.startOfTurn = function(unit)
{
    ACTION_REPLACE_UNIT.perform(unit,"FAI_UTIL_SUPPLY");
};

APC.getUnitDamageID = function()
{
    return "FAI_UTIL_SUPPLY";
};

APC.getUnitType = function()
{
    return GameEnums.UnitType_Vanilla_Ground;
};