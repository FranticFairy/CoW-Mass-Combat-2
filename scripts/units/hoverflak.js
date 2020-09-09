HOVERFLAK.startOfTurn = function(unit)
{
    ACTION_REPLACE_UNIT.perform(unit,"FAI_HOVERCRAFT");
};

HOVERFLAK.getUnitDamageID = function()
{
    return "FAI_HOVERCRAFT";
};
HOVERFLAK.getUnitType = function()
{
    return GameEnums.UnitType_Vanilla_Hovercraft;
};