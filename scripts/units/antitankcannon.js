ANTITANKCANNON.startOfTurn = function(unit)
{
    ACTION_REPLACE_UNIT.perform(unit,"FAI_GUN_AT");
};
ANTITANKCANNON.getUnitDamageID = function()
{
    return "FAI_GUN_AT";
};

ANTITANKCANNON.getUnitType = function()
{
    return GameEnums.UnitType_Vanilla_Ground;
};