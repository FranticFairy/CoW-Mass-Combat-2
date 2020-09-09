DESTROYER.startOfTurn = function(unit)
{
    ACTION_REPLACE_UNIT.perform(unit,"FAI_SHIP_CRUISER");
};

DESTROYER.getUnitDamageID = function()
{
    return "FAI_SHIP_CRUISER";
};

DESTROYER.getUnitType = function()
{
    return GameEnums.UnitType_Vanilla_Naval;
};