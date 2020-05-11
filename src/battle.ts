import Pokemon from "./pokemon";

export default class Battle {
    public pokemon1;
    public pokemon2;
    public first;
    public second;

    constructor(pokemon1: Pokemon, pokemon2: Pokemon) {
        this.pokemon1 = pokemon1;
        this.pokemon2 = pokemon2;
    }

    round(): string {

        this.setTurns();

        this.first.attack(this.second);
        this.second.attack(this.first);

        return "";
    }

    setTurns(): void {
        if (this.pokemon1.speed > this.pokemon2.speed) {
            this.first = this.pokemon1;
            this.second = this.pokemon2;
        }
        this.first = this.pokemon2;
        this.second = this.pokemon1;

        console.log(this.first.name + " will start the fight.");
    }
}

