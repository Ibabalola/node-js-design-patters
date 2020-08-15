const { writeFile, unlink } = require('fs');
const path = require('path');

class ExitCommand {

    get name() {
        return 'exit... bye!';
    }

    execute() {
        process.exit(0);
    }
}

class CreateCommand {

    constructor(filename, text) {
        this.filename = filename;
        this.body = text;
        this.fullPath = path.join(__dirname, this.filename);
    }

    get name() {
        return `create ${this.filename}`;
    }

    execute() {
        writeFile(this.fullPath, this.body, f => f);
    }

    undo() {
        unlink(this.fullPath, f => f);
    }
}

module.exports = {
    ExitCommand,
    CreateCommand
}