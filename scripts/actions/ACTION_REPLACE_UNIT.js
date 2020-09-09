var Constructor = function()
{
    // called for loading the main sprite
    this.perform = function(unit, replaceUnitId)
    {
        var inputUnitX = unit.getX();
        var inputUnitY = unit.getY();
        var inputUnitOwner = unit.getOwner();
        var inputUnitHP = unit.getHp();
        unit.removeUnit();

        var newUnit = map.spawnUnit(inputUnitX, inputUnitY, replaceUnitId, inputUnitOwner);
        newUnit.setHp(inputUnitHP);
    };
}

Constructor.prototype = ACTION;
var ACTION_REPLACE_UNIT = new Constructor();
