class Store {

    /**
     * Observable Object, to announce sales
     * @param {string} name 
     */
    constructor(name) {
        this.name = name;
        this.subscribes = [];
    }

    subscribe(observer) {
        this.subscribes.push(observer);
    }

    sale(discount) {
        this.subscribes.forEach(observer => observer.notify(this.name, discount));
    }

}

module.exports = Store;