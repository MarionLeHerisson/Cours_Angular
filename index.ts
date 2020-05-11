function Pokemon (name, type, lp = 18, lvl = 1, xp = 0) {
    this.name = name;
    this.type = type;
    this.lp = lp;
    this.lvl = lvl;
    this.xp = xp;

    this.attack = () => {
        return "It's super effective !";
    }

    this.gainXp = (xp = null) => {

    }

    this.looseLife = (amount) => {
        this.lp -= amount;

        if (this.lp < 0) {
            this.lp = 0;
        }
    }

    this.isKo = () => {
        return this.lp === 0;
    }
}

const test = new Pokemon("Magicarpe", "water");
console.log(test.name);