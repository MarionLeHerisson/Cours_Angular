import Pokemon from '../src/pokemon';
import Battle from '../src/battle';

test('faster pokemon starts first', () => {
    const magicarpe = new Pokemon("Magicarpe", 2);
    const pikachu = new Pokemon("Pikachu", 4);

    const battle = new Battle(magicarpe, pikachu);
    battle.setTurns();

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
