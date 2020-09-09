BLACK_BOAT.startOfTurn = function(unit)
{
    ACTION_REPLACE_UNIT.perform(unit,"FAI_SHIP_SUPPLY");
};


BLACK_BOAT.getUnitDamageID = function()
{
    return "FAI_SHIP_SUPPLY";
};
BLACK_BOAT.getUnitType = function()
{
    return GameEnums.UnitType_Vanilla_Naval;
};