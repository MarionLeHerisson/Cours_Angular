import Pokemon from './pokemon';
import Battle from "./battle";

const magicarpe = new Pokemon("Magicarpe", 7);
const ronflex = new Pokemon("Ronflex", 3);

const battle = new Battle(magicarpe, ronflex);
battle.fight();
