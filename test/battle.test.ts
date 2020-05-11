import Pokemon from '../src/pokemon';
import Battle from '../src/battle';

test('faster pokemon starts first', () => {
    const magicarpe = new Pokemon("Magicarpe", 2);
    const pikachu = new Pokemon("Pikachu", 4);

    const battle = new Battle(magicarpe, pikachu);
    battle.startTurn();

    expect(battle.first).toBe(pikachu);
});
