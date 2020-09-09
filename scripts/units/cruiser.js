CRUISER.startOfTurn = function(unit)
{
    ACTION_REPLACE_UNIT.perform(unit,"FAI_SHIP_DESTROYER");
};

CRUISER.getUnitDamageID = function()
{
    return "FAI_SHIP_DESTROYER";
};

CRUISER.getUnitType = function()
{
    return GameEnums.UnitType_Vanilla_Naval;
};