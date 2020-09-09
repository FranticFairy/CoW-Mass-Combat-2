LIGHT_TANK.startOfTurn = function(unit)
{
    ACTION_REPLACE_UNIT.perform(unit,"FAI_TANK_LIGHT");
};

LIGHT_TANK.getUnitDamageID = function()
{
    return "FAI_TANK_LIGHT";
};
LIGHT_TANK.getUnitType = function()
{
    return GameEnums.UnitType_Vanilla_Ground;
};