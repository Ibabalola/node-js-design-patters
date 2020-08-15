/**
 * Behavioral: Command
 * 
 * Command are objects that conatain all the of the data necessary
 * to execute a specific action on the client.
 * 
 * Intent: "Encapsulate a request as an object, thereby
 * letting you parameterize with different requests, queue
 * or log requests, and support undoable operations."
 */

const conductor = require('./conductor');
const { ExitCommand, CreateCommand } = require('./commands');

const { createInterface } = require('readline');
const rl = createInterface({
     input: process.stdin,
     output: process.stdout
});

console.log('create <fileName> <text> | history | undo| redo | exit');
rl.prompt();

rl.on('line', input => {

    const [ commandText, ...remaining ] = input.split(' ')
    const [ fileName, ...fileText ] = remaining
    const text = fileText.join(' ');

    switch(commandText) {

        case "history":
            conductor.printHistory()
            break;
        
        case "undo":
            conductor.undo();
            break;
        
        case "redo":
            conductor.redo();
            break;

        case "exit":
            conductor.run(new ExitCommand());
            break;
        
        case "create":
            conductor.run(new CreateCommand(fileName, text));
            console.log(`TODO: Create File ${fileName}`);
            console.log('file contents:', text);
            break;

        default:
            console.log(`${commandText} command not found!`);
    }

    rl.prompt();

});