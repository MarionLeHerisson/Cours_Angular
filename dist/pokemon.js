"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pokemon = /** @class */ (function () {
    function Pokemon(name, speed) {
        if (speed === void 0) { speed = 3; }
        // this.lp = lp;
        // this.lpMax = lpMax;
        // this.lvl = lvl;
        this.name = name;
        this.speed = speed;
        // this.type = type;
        // this.xp = xp;
        // this.xpMax = xpMax;
    }
    return Pokemon;
}());
exports.default = Pokemon;
