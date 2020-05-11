function Pokemon(name, type, lp, lvl, xp) {
    var _this = this;
    if (lp === void 0) { lp = 18; }
    if (lvl === void 0) { lvl = 1; }
    if (xp === void 0) { xp = 0; }
    this.name = name;
    this.type = type;
    this.lp = lp;
    this.lvl = lvl;
    this.xp = xp;
    this.attack = function () {
        return "It's super effective !";
    };
    this.gainXp = function (xp) {
        if (xp === void 0) { xp = null; }
    };
    this.looseLife = function (amount) {
        _this.lp -= amount;
        if (_this.lp < 0) {
            _this.lp = 0;
        }
    };
    this.isKo = function () {
        return _this.lp === 0;
    };
}
var test = new Pokemon("Magicarpe", "water");
console.log(test.name);
