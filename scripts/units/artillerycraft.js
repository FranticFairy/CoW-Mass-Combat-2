ARTILLERYCRAFT.startOfTurn = function(unit)
{
    ACTION_REPLACE_UNIT.perform(unit,"FAI_HOVERCRAFT");
};

ARTILLERYCRAFT.getUnitDamageID = function()
{
    return "FAI_HOVERCRAFT";
};


ARTILLERYCRAFT.getUnitType = function()
{
    return GameEnums.UnitType_Vanilla_Hovercraft;
};