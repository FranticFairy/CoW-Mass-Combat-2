LANDER.startOfTurn = function(unit)
{
    ACTION_REPLACE_UNIT.perform(unit,"FAI_SHIP_TRANS");
};


LANDER.getUnitDamageID = function()
{
    return "FAI_SHIP_TRANS";
};


LANDER.getUnitType = function()
{
    return GameEnums.UnitType_Vanilla_Naval;
};