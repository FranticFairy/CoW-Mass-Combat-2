SUBMARINE.startOfTurn = function(unit)
{
    ACTION_REPLACE_UNIT.perform(unit,"FAI_SHIP_SUBMARINE");
};

SUBMARINE.getUnitDamageID = function()
{
    return "FAI_SHIP_SUBMARINE";
};


SUBMARINE.getUnitType = function()
{
    return GameEnums.UnitType_Vanilla_Naval;
};