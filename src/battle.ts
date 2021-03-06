import Pokemon from "./pokemon";

export default class Battle {
    public pokemon1;
    public pokemon2;
    public first;
    public second;
    public winner = null;

    constructor(pokemon1: Pokemon, pokemon2: Pokemon) {
        this.pokemon1 = pokemon1;
        this.pokemon2 = pokemon2;
    }

    fight(): void {
        while (this.winner === null) {
            this.round();
        }
    }

    round(): void {

        this.setTurns();

        this.first.attack(this.second);
        this.checkVictory();

        if(this.winner === null) {
            this.second.attack(this.first);
            this.checkVictory();
        }
    }

    checkVictory(): void {
        if(this.first.isKo()) {
            console.log(this.first.name + " is KO !");
            console.log(this.second.name + " won the battle !");

            this.second.gainXp(13);
            this.winner = this.second;
        }
        else if(this.second.isKo()) {
            console.log(this.second.name + " is KO !");
            console.log(this.first.name + " won the battle !");

            this.first.gainXp(13);
            this.winner = this.first;
        }
    }

    setTurns(random = Math.random): void {
        if (this.pokemon1.speed > this.pokemon2.speed) {
            this.first = this.pokemon1;
            this.second = this.pokemon2;
        }
        else if (this.pokemon1.speed === this.pokemon2.speed) {
            if (random() % 2 === 1) {
                this.first = this.pokemon1;
                this.second = this.pokemon2;
            } else {
                this.first = this.pokemon2;
                this.second = this.pokemon1;
            }
        }

        this.first = this.pokemon2;
        this.second = this.pokemon1;

        console.log(this.first.name + " will start the round.");
    }
}

