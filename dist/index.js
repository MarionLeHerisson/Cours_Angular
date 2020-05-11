"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pokemon_1 = require("./pokemon");
var battle_1 = require("./battle");
var magicarpe = new pokemon_1.default("Magicarpe", 7);
var ronflex = new pokemon_1.default("Ronflex", 3);
var battle = new battle_1.default(magicarpe, ronflex);
battle.round();
