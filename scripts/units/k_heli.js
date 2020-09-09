K_HELI.startOfTurn = function(unit)
{
    ACTION_REPLACE_UNIT.perform(unit,"FAI_HELI_GUNSHIP");
};

K_HELI.getUnitDamageID = function()
{
    return "FAI_HELI_GUNSHIP";
};
K_HELI.getUnitType = function()
{
    return GameEnums.UnitType_Vanilla_Air;
};