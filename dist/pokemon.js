"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pokemon = /** @class */ (function () {
    function Pokemon(name, speed) {
        if (speed === void 0) { speed = 3; }
        this.name = name;
        this.speed = speed;
        this.atk = 5;
        this.hp = 10;
        this.hpMax = this.hp;
        this.lvl = 1;
        this.xp = 0;
        this.xpMax = 10;
    }
    Pokemon.prototype.attack = function (adversary) {
        adversary.looseLife(this.atk);
        console.log(this.name + " uses his basic attack !");
        console.log(adversary.name + " now has " + adversary.hp + " hp.");
    };
    Pokemon.prototype.gainXp = function (amount) {
        this.xp += amount;
        if (this.xp > this.xpMax) {
            this.lvlUp();
        }
    };
    Pokemon.prototype.isKo = function () {
        return this.hp === 0;
    };
    Pokemon.prototype.looseLife = function (amount) {
        this.hp -= amount;
        if (this.hp < 0) {
            this.hp = 0;
        }
    };
    Pokemon.prototype.lvlUp = function () {
        this.lvl += 1;
        this.hp += 10;
        this.xp = this.xpMax - this.xp;
        this.xpMax += 10;
        this.speed += 3;
    };
    return Pokemon;
}());
exports.default = Pokemon;
