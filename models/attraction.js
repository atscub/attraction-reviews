class Attraction {
    constructor(id, name) {       // Accept name and age in the constructor
        this.id = id || null;
        this.name = name || null;
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    getId() {
        return this.id;
    }

    setId(id) {
        this.id = id;
    }
}

module.exports = Attraction;