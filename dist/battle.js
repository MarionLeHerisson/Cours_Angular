"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Battle = /** @class */ (function () {
    function Battle(pokemon1, pokemon2) {
        this.pokemon1 = pokemon1;
        this.pokemon2 = pokemon2;
    }
    Battle.prototype.round = function () {
        this.setTurns();
        this.first.attack(this.second);
        this.second.attack(this.first);
        return "";
    };
    Battle.prototype.setTurns = function () {
        if (this.pokemon1.speed > this.pokemon2.speed) {
            this.first = this.pokemon1;
            this.second = this.pokemon2;
        }
        this.first = this.pokemon2;
        this.second = this.pokemon1;
        console.log(this.first.name + " will start the fight !");
    };
    return Battle;
}());
exports.default = Battle;
