import Pokemon from "./pokemon";

export default function startTurn(pokemon1: Pokemon, pokemon2: Pokemon): Pokemon {
    if(pokemon1.speed > pokemon2.speed) {
        return pokemon1;
    }
    return pokemon2;
}