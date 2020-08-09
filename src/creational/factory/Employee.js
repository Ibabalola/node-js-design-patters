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
        return JSON.stringify(this);
    }

}

module.exports = Employee;