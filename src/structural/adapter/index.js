/**
 * Structural: Adapter
 * 
 * Intent: "Convert the interface of a class into another
 * clients expect. Adapter lets classes work together
 * that couldn't otherwise because of incompatible interfaces"
 * 
 * Problem: the same code may need to run in different environments
 * an adapter will give the same code the capability to run in 
 * different enviroments
 * 
 * The below uses the localStore API, which is not available 
 * in Node JS
 */

const localStorage = require('./localStorage');

console.log(`localStorage length: ${localStorage.length}`);

const uid = localStorage.getItem("user_id");

console.log(`user_id: ${uid}`);

if (!uid) {
    console.log('User ID not found. Setting the user id and token...');
    localStorage.setItem("token", "SSBhbSBhIGJhc2UgNjQgdG9rZW4gdmFsdWU=");
    localStorage.setItem("user_id", "12345");
} else {
    console.log('User ID found.', uid);
    console.log('clearning the User ID...');
    localStorage.clear();
}