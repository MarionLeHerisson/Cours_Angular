import Pokemon from '../src/pokemon';

test('a pokemon attacks another one', () => {
    const magicarpe = new Pokemon("Magicarpe", 2);
    const pikachu = new Pokemon("Pikachu", 4);

    magicarpe.attack(pikachu);

    expect(pikachu.hp).toBe(5);
});
