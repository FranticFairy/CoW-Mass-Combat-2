NEOTANK.startOfTurn = function(unit)
{
    ACTION_REPLACE_UNIT.perform(unit,"FAI_TANK_HOVER");
};

NEOTANK.getUnitDamageID = function()
{
    return "FAI_TANK_HOVER";
};
NEOTANK.getUnitType = function()
{
    return GameEnums.UnitType_Vanilla_Ground;
};