MOTORBIKE.startOfTurn = function(unit)
{
    ACTION_REPLACE_UNIT.perform(unit,"FAI_IFV_AMPHI");
};

MOTORBIKE.getUnitDamageID = function()
{
    return "FAI_IFV_AMPHI";
};
MOTORBIKE.getUnitType = function()
{
    return GameEnums.UnitType_Vanilla_Infantry;
};