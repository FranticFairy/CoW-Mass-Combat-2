HEAVY_HOVERCRAFT.startOfTurn = function(unit)
{
    ACTION_REPLACE_UNIT.perform(unit,"FAI_HOVER_HEAVY");
};

HEAVY_HOVERCRAFT.getUnitDamageID = function()
{
    return "FAI_HOVER_HEAVY";
};
HEAVY_HOVERCRAFT.getUnitType = function()
{
    return GameEnums.UnitType_Vanilla_Hovercraft;
};