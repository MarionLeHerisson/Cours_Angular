import PokemonInterface from "./interfaces";

export default class Pokemon implements PokemonInterface {
    public atk;
    public hp;
    public name;
    public speed;

    constructor(name: string, speed: number = 3) {
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

    attack(adversary: Pokemon): void {

        adversary.hp -= this.atk;

        console.log(this.name + " uses his basic attack !");
        console.log(adversary.name + " now has " + adversary.hp + " hp.");
        // return "It's super effective !";
    }

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
    //
    // isKo(): boolean {
    //     return this.lp === 0;
    // }
    //
    // lvlUp(): void {
    //     this.lvl += 1;
    //     this.lpMax += 10;
    //     this.lp += 10;
    //     this.xp = this.xpMax - this.xp;
    //     this.xpMax += 10;
    //     this.speed += 3;
    // }
}
