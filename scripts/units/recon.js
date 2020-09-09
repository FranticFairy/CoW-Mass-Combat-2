RECON.startOfTurn = function(unit)
{
    ACTION_REPLACE_UNIT.perform(unit,"FAI_SUPP_RECON");
};

RECON.getUnitDamageID = function()
{
    return "FAI_SUPP_RECON";
};
RECON.getUnitType = function()
{
    return GameEnums.UnitType_Vanilla_Ground;
};