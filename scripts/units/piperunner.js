PIPERUNNER.startOfTurn = function(unit)
{
    ACTION_REPLACE_UNIT.perform(unit,"FAI_TRAIN_GUN");
};

PIPERUNNER.getUnitDamageID = function()
{
    return "FAI_TRAIN_GUN";
};
PIPERUNNER.getUnitType = function()
{
    return GameEnums.UnitType_Vanilla_Ground;
};