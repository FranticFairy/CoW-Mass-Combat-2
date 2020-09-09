ARTILLERY.startOfTurn = function(unit)
{
    ACTION_REPLACE_UNIT.perform(unit,"FAI_SUPP_SPARTY");
};

ARTILLERY.getUnitDamageID = function()
{
    return "FAI_SUPP_SPARTY";
};


ARTILLERY.getUnitType = function()
{
    return GameEnums.UnitType_Vanilla_Ground;
};