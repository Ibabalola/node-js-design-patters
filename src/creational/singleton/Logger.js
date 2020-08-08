let instance;

class Logger {

    constructor() {
        this.logs = [];
    }

    get count() {
        return this.logs.length;
    }

    log(message) {
        const timestamp = new Date().toISOString();
        this.logs.push({ message, timestamp });
        console.log(`${timestamp} - ${message}`);
    }

}

// Object-Oriented Solution for implementing a singleton
// class Singleton {

//     constructor() {
//         if (!instance) {
//             instance = new Logger();
//         }
//     }

//     getInstance() {
//         return instance;
//     }
// }

// Singletons in Node
// Export the instance from the Node js module
// when we run this file it will run once
// create the new instance of the logger
// and save it in cache
// Node js will handle export the same instance 
// of the class to every module that wants to consume it
module.exports = new Logger();