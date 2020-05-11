"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function startTurn(pokemon1, pokemon2) {
    if (pokemon1.speed > pokemon2.speed) {
        return pokemon1;
    }
    return pokemon2;
}
exports.default = startTurn;
