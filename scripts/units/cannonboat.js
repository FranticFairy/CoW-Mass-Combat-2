CANNONBOAT.startOfTurn = function(unit)
{
    ACTION_REPLACE_UNIT.perform(unit,"FAI_SHIP_DESTROYER");
};

CANNONBOAT.getUnitDamageID = function()
{
    return "FAI_SHIP_DESTROYER";
};
CANNONBOAT.getUnitType = function()
{
    return GameEnums.UnitType_Vanilla_Naval;
};