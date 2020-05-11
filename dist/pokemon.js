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
    Pokemon.prototype.attack = function (adversary) {
        adversary.hp -= this.atk;
        console.log(this.name + " uses his basic attack !");
        console.log(adversary.name + " now has " + adversary.hp + " hp.");
        // return "It's super effective !";
    };
    // gainXp(amount: number): void {
    //     this.xp += amount;
    //
    //     if(this.xp > this.xpMax) {
    //         this.lvlUp();
    //     }
    // }
    //
    // looseLife(amount: number): void {
    //     this.lp -= amount;
    //
    //     if (this.lp < 0) {
    //         this.lp = 0;
    //     }
    // }
    //
    // gainLife(amount: number): void {
    //     this.lp += amount;
    //
    //     if(this.lp > this.lpMax) {
    //         this.lp = this.lpMax;
    //     }
    // }
    Pokemon.prototype.isKo = function () {
        return this.hp === 0;
    };
    return Pokemon;
}());
exports.default = Pokemon;
