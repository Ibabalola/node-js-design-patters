const fs = require('fs')
class FS_Proxy {

    constructor(fs_subject) {
        this.fs = fs_subject;
    }

    readFile(path, file_format, callback) {

        if (!path.match(/.md$|.MD/)) {
            return callback(new Error(`Can only read Markdown files.`));
        }

        this.fs.readFile(path, file_format, (error, contents) => {

            if (error) {
                console.error(error);
                return callback(error);
            }

            return callback(contents);

        });
    }

    writeFile() {
        // clone of the fs.writeFile method
    }

    appendFile() {
        // clone of the fs.appendFile method
    }

}

module.exports = new FS_Proxy(fs);