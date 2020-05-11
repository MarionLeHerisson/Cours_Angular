"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pokemon = /** @class */ (function () {
    function Pokemon(name, speed) {
        if (speed === void 0) { speed = 3; }
        this.name = name;
        this.speed = speed;
        this.atk = 5;
        this.hp = 10;
        // this.lpMax = lpMax;
        // this.lvl = lvl;
        // this.type = type;
        // this.xp = xp;
        // this.xpMax = xpMax;
    }
    Pokemon.prototype.attack = function (pokemon) {
        pokemon.hp -= this.atk;
        console.log(this.name + " uses his basic attack !");
        console.log(pokemon.name + " now has " + pokemon.hp + "hp !");
        return "It's super effective !";
    };
    return Pokemon;
}());
exports.default = Pokemon;
