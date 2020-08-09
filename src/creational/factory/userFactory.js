const Employee = require('./Employee');
const Shopper = require('./Shopper');

const EMPLOYEE = 'employee';
const SHOPPER = 'shopper';

const userFactory = (name, money = 0, type, employer) => {
    switch(type) {
        case EMPLOYEE:
            return new Employee(name, money, employer);
        case SHOPPER:
            return new Shopper(name, money);
        default:
            return null;
    }
}

module.exports = userFactory;
module.exports.EMPLOYEE = EMPLOYEE;
module.exports.SHOPPER = SHOPPER;