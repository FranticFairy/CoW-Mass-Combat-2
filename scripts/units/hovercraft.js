HOVERCRAFT.startOfTurn = function(unit)
{
    ACTION_REPLACE_UNIT.perform(unit,"FAI_HOVERCRAFT");
};

HOVERCRAFT.getUnitDamageID = function()
{
    return "FAI_HOVERCRAFT";
};
HOVERCRAFT.getUnitType = function()
{
    return GameEnums.UnitType_Vanilla_Hovercraft;
};