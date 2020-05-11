import PokemonInterface from "./interfaces";

export default class Pokemon implements PokemonInterface {
    public atk;
    public lvl;
    public hp;
    public hpMax;
    public name;
    public speed;
    public xp;
    public xpMax;

    constructor(name: string, speed: number = 3) {
        this.name = name;
        this.speed = speed;
        this.atk = 5;
        this.hp = 10;
        this.hpMax = this.hp;
        this.lvl = 1;
        this.xp = 0;
        this.xpMax = 10;
    }

    attack(adversary: Pokemon): void {

        adversary.looseLife(this.atk);

        console.log(this.name + " uses his basic attack !");
        console.log(adversary.name + " now has " + adversary.hp + " hp.");
    }

    gainXp(amount: number): void {
        this.xp += amount;

        if(this.xp > this.xpMax) {
            this.lvlUp();
        }
    }

    isKo(): boolean {
        return this.hp === 0;
    }

    looseLife(amount: number): void {
        this.hp -= amount;

        if(this.hp < 0) {
            this.hp = 0;
        }
    }

    lvlUp(): void {
        this.lvl += 1;
        this.hp += 10;
        this.xpMax *= 2;
        this.speed += 3;
    }
}
