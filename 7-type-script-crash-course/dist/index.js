"use strict";
// Basic Types
let id = 5;
let company = "Traversy Media";
let isPublished = true;
let x = "Hello";
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, "Hello"];
// ids.push("Hello");
// Tuple →　a structure of data that has several parts
let person = [1, "Brad", true];
// console.log(person[2]); // true
// Tuple Array
let employee;
employee = [
    [1, "Brad"],
    [2, "John"],
    [3, "Jill"],
];
// Union
let pid = 22;
pid = "23";
// Enum
var Direction1;
(function (Direction1) {
    // Up,
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 5] = "Left";
    Direction1[Direction1["Right"] = 6] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Up); // 0 1
console.log(Direction1.Down); // 2
console.log(Direction1.Left); // 5
console.log(Direction1.Right); // 5
var Direction2;
(function (Direction2) {
    // Up,
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
console.log(Direction2.Up); // Up
console.log(Direction2.Down); // Down
// Objects
const user1 = {
    id: 1,
    name: "John",
};
const user2 = {
    id: 1,
    name: "John",
};
// Objects
const user3 = {
    id: 1,
    name: "John",
};
// Type Assertion
let cid = 1;
let customerId = cid;
customerId = cid;
// customerId = true;
// Function
function addNum(x, y) {
    return x + y;
}
function log(message) {
    console.log(message);
}
log(1);
log("log");
const userInterface = {
    id: 1,
    name: "John",
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
// Classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
    otherFnc() {
        return "otherFnc";
    }
}
const brad = new Person(1, "Brad Traversy");
const mike = new Person(2, "Mike Jordan");
// brad.id = 5;
console.log("🚀 ~ file: index.ts ~ line 126 ~ brad,mike", brad, mike);
console.log("🚀 ~ file: index.ts ~ line 122 ~ Person ~ register ~ register", brad.register());
// Subclasses
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, "Shawn", "Developer");
console.log("🚀 ~ file: index.ts ~ line 156 ~ emp.register()", emp.register());
// Generics
// basiclly used to build reusable components
// T is a placeholder of a Type, and then define the type later,
// if we don't use T, then we should create getArray twice (number and string)
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(["brad", "John", "Jill"]);
// numArray.push("hello"); // error
strArray.push("hello");
