/**
 * Structural: Proxy
 * 
 * A proxy is an object that controls access to another object
 * 
 * Intent: "Provide a surrogate or placeholder for another object to control access to it."
 * 
 * In addition to managing expensive objects proxies can be:
 * - to manage a remote resource
 * - to restrict access to the actual object
 * - provide data validation of input
 * - provide security
 * - cache data
 * - log actions
 * 
 * As like an adapter the proxy must provide the same interface as the object,
 * The client would call the same method on the proxy that they would do on the 
 * original object.
 * 
 * Example: Proxy (Object) that will control access to the file system
 * the proxy emulates the interface of actual fs module 
 * however has additional functionailty 
 * to guard the fs module reading txt files
 */

const path = require('path');
const fs = require('./FS_Proxy');

const txtFile = path.join(__dirname, 'Readme.txt');
const mdFile = path.join(__dirname, 'Readme.md');

const result = (error, contents) => {

    if (error) {
        console.log('\x07');
        console.error(error);
        process.exit(0);
    }

    console.log('reading file...');
    console.log(contents);
}

fs.readFile(txtFile, 'UTF-8', result);
fs.readFile(mdFile, 'UTF-8', result);
