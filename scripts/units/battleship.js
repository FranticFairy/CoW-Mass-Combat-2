BATTLESHIP.startOfTurn = function(unit)
{
    ACTION_REPLACE_UNIT.perform(unit,"FAI_SHIP_BATTLESHIP");
};

BATTLESHIP.getUnitDamageID = function()
{
    return "FAI_SHIP_BATTLESHIP";
};

BATTLESHIP.getUnitType = function()
{
    return GameEnums.UnitType_Vanilla_Naval;
};
