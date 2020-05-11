import Pokemon from './pokemon';
import startTurn from './battle';

test('faster pokemon starts first', () => {
    const magicarpe = new Pokemon("Magicarpe", 2);
    const pikachu = new Pokemon("Pikachu", 4);
    expect(startTurn(magicarpe, pikachu)).toBe(pikachu);
});