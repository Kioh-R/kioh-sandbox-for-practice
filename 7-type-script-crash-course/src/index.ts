// Basic Types

let id: number = 5;
let company: string = "Traversy Media";
let isPublished: boolean = true;
let x: any = "Hello";

let ids: number[] = [1, 2, 3, 4, 5];
let arr: any[] = [1, true, "Hello"];

// ids.push("Hello");

// Tuple →　a structure of data that has several parts
let person: [number, string, boolean] = [1, "Brad", true];
// console.log(person[2]); // true
// Tuple Array
let employee: [number, string][];

employee = [
  [1, "Brad"],
  [2, "John"],

  [3, "Jill"],
];

// Union
let pid: string | number = 22;
pid = "23";

// Enum
enum Direction1 {
  // Up,
  Up = 1,
  Down,
  Left = 5,
  Right,
}
console.log(Direction1.Up); // 0 1
console.log(Direction1.Down); // 2
console.log(Direction1.Left); // 5
console.log(Direction1.Right); // 5

enum Direction2 {
  // Up,
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right",
}
console.log(Direction2.Up); // Up
console.log(Direction2.Down); // Down

// Objects
const user1 = {
  id: 1,
  name: "John",
};

const user2: { id: number; name: string } = {
  id: 1,
  name: "John",
};

type User = { id: number; name: string };
// Objects
const user3: User = {
  id: 1,
  name: "John",
};

// Type Assertion
let cid: any = 1;
let customerId = <number>cid;
customerId = cid as number;
// customerId = true;

// Function
function addNum(x: number, y: number): number {
  return x + y;
}

function log(message: string | number): void {
  console.log(message);
}

log(1);
log("log");

// Interface
interface UserInterface {
  readonly id: number;
  name: string;
  age?: number;
}
const userInterface: UserInterface = {
  id: 1,
  name: "John",
};
// userInterface.id = 5;

type Point = number | string;
// interface Point2 = number | string;

interface MathFunc {
  (x: number, y: number): number;
}

const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;

interface PersonInterface {
  id: number;
  name: string;

  register(): string;
}

// Classes
class Person implements PersonInterface {
  id: number;
  name: string;

  constructor(id: number, name: string) {
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
console.log(
  "🚀 ~ file: index.ts ~ line 122 ~ Person ~ register ~ register",
  brad.register()
);

// Subclasses
class Employee extends Person {
  position: string;
  constructor(id: number, name: string, position: string) {
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
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let numArray = getArray<number>([1, 2, 3, 4]);
let strArray = getArray<string>(["brad", "John", "Jill"]);

// numArray.push("hello"); // error
strArray.push("hello");
