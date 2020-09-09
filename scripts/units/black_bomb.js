BLACK_BOMB.startOfTurn = function(unit)
{
    ACTION_REPLACE_UNIT.perform(unit,"FAI_PLANE_TANKBUSTER");
};


BLACK_BOMB.getUnitDamageID = function()
{
    return "FAI_PLANE_TANKBUSTER";
};
BLACK_BOMB.getUnitType = function()
{
    return GameEnums.UnitType_Vanilla_Air;
};