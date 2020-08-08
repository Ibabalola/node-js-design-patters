# Node.js - Design Patterns

**What are Design Patterns?**

Reusable, reliable solutions to problems that we face every day in software development.

* Cateloged solutions
* Resuable in many different situations
* Well documented
* Language for collaboration
* Improve architecture
* Aims to decouple objects or modules and reduce the overall complexity of the architecture
* Write better code
* Become a better programmer

## Gang of Four (GOF) Design Patterns

_Design Patterns: Elements of Reusable Object-Objected Software_

**Published 1994**

**Authors**
* Erich Gamma
* Richard Helm
* Ralph Johnson
* John Vlissidos

## Design Pattern Essentials

* Pattern name
* The problem
* The solution
* Consequences

Design pattern can broken into 3 categories
* Creational - deal with class instantiations / the creation of objects within our applications
* Structural - deal with how objects are composed or put together
* Behavioral - define how objects interact with eachother

## Creational
- Abstract Factory
- Builder
- Factory Method
- Prototype
- Singleton

## Structural
- Adapter
- Bridge
- Composite
- Decorator
- Facade
- Flyweight
- Proxy

## Behavioral
- Chain of Responsibility
- Command
- Interpreter
- Iterator
- Mediator
- Memento
- Observer
- State
- Strategy
- Temple Method
- Visitor

## Anti-Patterns

Bad solutions that cause problems

- Code smells
- Need refactoring

### Anti-Patterns in JS
 - Modifying the prototype on an instance

    `person.__proto__.address = {}`

### Anti-Patterns in Node
- Syncing execution after initialisation

```
// JavaScript only has one thread so we shouldn't block it
// This code would make our application slow for all our 
// connected users

listen() {
    fs.readFileSync( ... )
}
```

- Callback chaos // Callback hell

```
readFile( ..., () => {
    parseData( ..., () => {
        writeFile( ..., () => {
            logResponse( ..., () => {

            });
        })
    })
})
```
