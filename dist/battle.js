"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Battle = /** @class */ (function () {
    function Battle(pokemon1, pokemon2) {
        this.winner = null;
        this.pokemon1 = pokemon1;
        this.pokemon2 = pokemon2;
    }
    Battle.prototype.fight = function () {
        while (this.winner === null) {
            this.round();
        }
    };
    Battle.prototype.round = function () {
        this.setTurns();
        this.first.attack(this.second);
        this.checkVictory();
        if (this.winner === null) {
            this.second.attack(this.first);
            this.checkVictory();
        }
    };
    Battle.prototype.checkVictory = function () {
        if (this.first.isKo()) {
            console.log(this.first.name + " is KO !");
            console.log(this.second.name + " won the battle !");
            this.winner = this.second.gainXp(13);
        }
        else if (this.second.isKo()) {
            console.log(this.second.name + " is KO !");
            console.log(this.first.name + " won the battle !");
            this.winner = this.first.gainXp(13);
        }
    };
    Battle.prototype.setTurns = function (random) {
        if (random === void 0) { random = Math.random; }
        if (this.pokemon1.speed > this.pokemon2.speed) {
            this.first = this.pokemon1;
            this.second = this.pokemon2;
        }
        else if (this.pokemon1.speed === this.pokemon2.speed) {
            if (random() % 2 === 1) {
                this.first = this.pokemon1;
                this.second = this.pokemon2;
            }
            else {
                this.first = this.pokemon2;
                this.second = this.pokemon1;
            }
        }
        this.first = this.pokemon2;
        this.second = this.pokemon1;
        console.log(this.first.name + " will start the round.");
    };
    return Battle;
}());
exports.default = Battle;
