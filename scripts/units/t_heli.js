T_HELI.startOfTurn = function(unit)
{
    ACTION_REPLACE_UNIT.perform(unit,"FAI_HELI_VHC");
};

T_HELI.getUnitDamageID = function()
{
    return "FAI_HELI_VHC";
};
T_HELI.getUnitType = function()
{
    return GameEnums.UnitType_Vanilla_Air;
};