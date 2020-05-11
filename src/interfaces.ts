import Pokemon from "./pokemon";

export default interface PokemonInterface {
    attack(adversary: Pokemon): void;
    gainXp(amount: number): void;
    isKo(): boolean;
    looseLife(amount: number): void;
    lvlUp(): void;
}
