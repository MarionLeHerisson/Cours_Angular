import Pokemon from '../src/pokemon';

test('a pokemon which is attacked loses life', () => {
    const magicarpe = new Pokemon("Magicarpe", 2);
    const pikachu = new Pokemon("Pikachu", 4);

    magicarpe.attack(pikachu);

    expect(pikachu.hp).toBe(5);
});

test('a pokemon with 0 hp is KO', () => {
    const magicarpe = new Pokemon("Magicarpe", 2);
    const pikachu = new Pokemon("Pikachu", 4);

    magicarpe.attack(pikachu);
    magicarpe.attack(pikachu);

    expect(pikachu.isKo()).toBe(true);
});

test('a pokemon wins xp', () => {
    const magicarpe = new Pokemon("Magicarpe", 2);

    magicarpe.gainXp(7);

    expect(magicarpe.xp).toBe(7);
});