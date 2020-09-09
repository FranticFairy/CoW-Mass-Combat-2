AIRCRAFTCARRIER.startOfTurn = function(unit)
{
    ACTION_REPLACE_UNIT.perform(unit,"FAI_SHIP_CARRIER");
};
AIRCRAFTCARRIER.getUnitDamageID = function()
{
    return "FAI_SHIP_CARRIER";
};
AIRCRAFTCARRIER.getUnitType = function()
{
    return GameEnums.UnitType_Vanilla_Naval;
};