SNIPER.startOfTurn = function(unit)
{
    ACTION_REPLACE_UNIT.perform(unit,"FAI_TRANS_AMPHI");
};

SNIPER.getUnitDamageID = function()
{
    return "FAI_TRANS_AMPHI";
};
SNIPER.getUnitType = function()
{
    return GameEnums.UnitType_Vanilla_Infantry;
};