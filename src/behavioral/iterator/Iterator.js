class Iterator {

    constructor(items=[]) {
        this.index = 0;
        this.items = items;
    }

    /**
     * Using ES6 destructuring on the array 
     * to get the first element
     */
    first() {
        const [first] = this.items;
        return first;
    }

    /**
     * Using the .reverse() on the array object
     * .reverse() is destructive -- it changes the original array
     * so use the spread operator to duplicate the original array
     * first
     */
    last() {
        const [last] = [...this.items].reverse();
        return last;
    }

    hasNext() {
        return this.index < this.items.length - 1;
    }

    current() {
        return this.items[this.index];
    }

    next() {
        if (this.hasNext()) 
            this.index++;
        
            return this.current();
    }

    hasPrev() {
        return this.index !== 0;
    }

    prev() {
        if (this.hasPrev())
            this.index--;

        return this.current();
    }

}

module.exports = Iterator;