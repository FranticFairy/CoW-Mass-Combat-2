WATERMINE.startOfTurn = function(unit)
{
    ACTION_REPLACE_UNIT.perform(unit,"FAI_OTH_SEAMINE");
};

WATERMINE.getUnitDamageID = function()
{
    return "FAI_OTH_SEAMINE";
};


WATERMINE.getUnitType = function()
{
    return GameEnums.UnitType_Vanilla_Naval;
};