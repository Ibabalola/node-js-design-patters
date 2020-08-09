class Shopper {

    constructor(name, money) {
        this._name = name;
        this._money = money;
    }

    toString() {
        return JSON.stringify(this);
    }
}

module.exports = Shopper;