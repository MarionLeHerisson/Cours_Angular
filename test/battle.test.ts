import Pokemon from '../src/pokemon';
import Battle from '../src/battle';

test('faster pokemon starts first', () => {
    const magicarpe = new Pokemon("Magicarpe", 2);
    const pikachu = new Pokemon("Pikachu", 4);

    const battle = new Battle(magicarpe, pikachu);
    battle.setTurns();

    expect(battle.first).toBe(pikachu);
});

test('pokemons with same speed are randomly chosen', () => {
    const magicarpe = new Pokemon("Magicarpe", 2);
    const pikachu = new Pokemon("Pikachu", 4);

    const battle = new Battle(magicarpe, pikachu);
    battle.setTurns(() => 1);

    expect(battle.first).toBe(pikachu);
});

test('both pokemon loose life after a round', () => {
    const magicarpe = new Pokemon("Magicarpe", 2);
    const pikachu = new Pokemon("Pikachu", 4);

    const battle = new Battle(magicarpe, pikachu);
    battle.round();

    expect(pikachu.hp).toBe(5);
    expect(magicarpe.hp).toBe(5);
});

test('if a pokemon won a battle', () => {
    const magicarpe = new Pokemon("Magicarpe", 2);
    const pikachu = new Pokemon("Pikachu", 4);

    const battle = new Battle(magicarpe, pikachu);
    battle.setTurns();
    magicarpe.attack(pikachu);
    magicarpe.attack(pikachu);
    battle.checkVictory();

    expect(battle.winner).toBe(magicarpe);
});

test('a battle should stop when a pokemon is KO', () => {
    const magicarpe = new Pokemon("Magicarpe", 2);
    const pikachu = new Pokemon("Pikachu", 4);

    const battle = new Battle(magicarpe, pikachu);
    battle.fight();

    expect(battle.winner).toBe(pikachu);
});

test('a pokemon that wins a fight gains xp', () => {
    const magicarpe = new Pokemon("Magicarpe", 2);
    const pikachu = new Pokemon("Pikachu", 4);

    expect(pikachu.xp).toBe(0);
    expect(magicarpe.xp).toBe(0);

    const battle = new Battle(magicarpe, pikachu);
    battle.fight();

    expect(pikachu.xp).toBe(13);
    expect(magicarpe.xp).toBe(0);
});

test('a pokemon with many xp wins a lvl', () => {
    const ronflex = new Pokemon("Ronflex", 2);
    ronflex.gainXp(15);

    expect(ronflex.lvl).toBe(2);
});
