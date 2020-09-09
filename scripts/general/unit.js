
UNIT.postAction = function (unit) {
    ACTION_ENDMOVE.perform(unit);
}

UNIT.getUnitTypeText = function(unitType)
{
    switch (unitType)
    {
    case GameEnums.UnitType_Air:
        return qsTr("Air");
    case GameEnums.UnitType_Naval:
        return qsTr("Naval");
    case GameEnums.UnitType_Ground:
        return qsTr("Ground");
    case GameEnums.UnitType_Infantry:
        return qsTr("Infantry");
    case GameEnums.UnitType_Hovercraft:
        return qsTr("Hovercraft");
    case 101:
        return qsTr("Train");
    case 102:
        return qsTr("Ekranoplan");
    case 103:
        return qsTr("Tank");
    case 104:
        return qsTr("Support Vehicle");
    case 105:
        return qsTr("Helicopter");
    case 106:
        return qsTr("Superweapon");



    case 200:
        return qsTr("Vanilla Ground");
    case 201:
        return qsTr("Vanilla Naval");
    case 202:
        return qsTr("Vanilla Air");
    case 203:
        return qsTr("Vanilla Infantry");
    case 204:
        return qsTr("Vanilla Hovercraft");
    }
    return tr("Ground");
}

UNIT.unitTypeToGround = function(unitType)
{
    if (
        unitType === GameEnums.UnitType_Hovercraft ||
        unitType === GameEnums.UnitType_Ground ||
        unitType === GameEnums.UnitType_Train ||
        unitType === GameEnums.UnitType_Tank ||
        unitType === GameEnums.UnitType_Support ||
        unitType === GameEnums.UnitType_Super ||
        unitType === GameEnums.UnitType_Vanilla_Ground ||
        unitType === GameEnums.UnitType_Vanilla_Infantry ||
        unitType === GameEnums.UnitType_Vanilla_Hovercraft
            ) {
        return GameEnums.UnitType_Ground;

    } else if (
        unitType === GameEnums.UnitType_Air ||
        unitType === GameEnums.UnitType_Helicopter ||
        unitType === GameEnums.UnitType_Vanilla_Air
            ) {
        return GameEnums.UnitType_Air;

    } else if (
        unitType === GameEnums.UnitType_Naval ||
        unitType === GameEnums.UnitType_Ekranoplan ||
        unitType === GameEnums.UnitType_Vanilla_Naval
            ) {
        return GameEnums.UnitType_Naval;
    }
    return unitType;
}