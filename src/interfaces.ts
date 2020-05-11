import Pokemon from "./pokemon";

export default interface PokemonInterface {
    attack(adversary: Pokemon): void;
    // gainXp(amount: number): void;
    // gainLife(amount: number): void
    // looseLife(amount: number): void;
    isKo(): boolean;
    // lvlUp(): void;
}
