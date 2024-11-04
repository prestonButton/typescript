// Lesson 1: Introduction to Variables

// Variables are used to store data that can be used and manipulated in a program.
// In TypeScript, we can declare variables using `let`, `const`, or `var`.

// `let` is used to declare a variable that can be reassigned.
let myVariable: number;
myVariable = 10; // Assigning a value to the variable

// `const` is used to declare a variable that cannot be reassigned.
const myConstant: string = "Hello, TypeScript!";

// `var` is an older way to declare variables, but it's not recommended due to its function-scoped behavior.
var oldVariable: boolean = true;

// Lesson 2: Data Types

// TypeScript is a statically typed language, which means we need to specify the type of data a variable can hold.

// Number: Used to represent numeric values.
let age: number = 25;

// String: Used to represent text.
let name: string = "John Doe";

// Boolean: Used to represent true or false values.
let isStudent: boolean = true;

// Null: Represents the intentional absence of any object value.
let emptyValue: null = null;

// Undefined: Represents an uninitialized variable.
let notAssigned: undefined;

// Array: Used to store multiple values in a single variable.
let numbers: number[] = [1, 2, 3, 4, 5];

// Object: Used to store a collection of key-value pairs.
let person: { name: string; age: number } = { name: "Alice", age: 30 };

// Tuple: Used to store an array with a fixed number of elements of different types.
let tuple: [string, number] = ["hello", 10];

// Enum: Used to define a set of named constants.
enum Color {
  Red,
  Green,
  Blue,
}
let favoriteColor: Color = Color.Green;

// Any: Used to store any type of value. Use with caution as it can defeat the purpose of TypeScript's type safety.
let randomValue: any = "Could be anything";

// Void: Used to represent the absence of any type, commonly used as the return type of functions that do not return a value.
function logMessage(message: string): void {
  console.log(message);
}
