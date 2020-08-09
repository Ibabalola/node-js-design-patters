class Shopper {

    constructor(name) {
        this._name = name;
        this._list = [];
    }

    get name() {
        return this._name;
    }

    set name(name) {
        this._name = name;
    }

    get list() {
        return this._list.join(', ');
    }

    addItemToList(item) {
        this._list.push(item);
    }

    /**
     * @method clone
     * 
     * The Object.getPrototypeOf() method returns the prototype (i.e. the value of the internal [[Prototype]] property) of the specified object.
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf
     * 
     * The Object.create() method creates a new object, using an existing object as the prototype of the newly created object.
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create
     */
    clone() {
        const proto = Object.getPrototypeOf(this);
        const clone = Object.create(proto);

        clone._name = this._name;
        clone._list = [...this._list];

        return clone;
    }
}

module.exports = Shopper;