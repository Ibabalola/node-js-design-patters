class Mall {

    /**
     * Observer Object
     */
    constructor() {
        this._sales = [];
    }

    get sales() {
        return JSON.stringify(this._sales);
    }

    notify(storeName, discount) {
        this._sales.push({ storeName, discount });
    }
    
}

module.exports = Mall;