class Employee {

    constructor(name, money, employer) {
        this._name = name;
        this._money = money;
        this._employer = employer;
    }

    payDay(pay) {
        this._money += pay;
    }

    toString() {
        return `Employee: ${this._name} has £${this._money} and currently works for ${this._employer}`;
    }

}

module.exports = Employee;