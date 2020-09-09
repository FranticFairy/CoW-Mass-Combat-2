FLARE.startOfTurn = function(unit)
{
    ACTION_REPLACE_UNIT.perform(unit,"FAI_SUPP_ARMORCAR");
};

FLARE.getUnitDamageID = function()
{
    return "FAI_SUPP_ARMORCAR";
};
FLARE.getUnitType = function()
{
    return GameEnums.UnitType_Vanilla_Ground;
};