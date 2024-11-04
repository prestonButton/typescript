// Lesson 1: Introduction to Variables

// Variables are used to store data that can be used and manipulated in a program.
// In TypeScript, we can declare variables using `let`, `const`, or `var`.

// `let` is used to declare a variable that can be reassigned.

// `const` is used to declare a variable that cannot be reassigned.

// `var` is an older way to declare variables, but it's not recommended due to its function-scoped behavior.

// Lesson 2: Data Types

// TypeScript is a statically typed language, which means we need to specify the type of data a variable can hold.

// Number: Used to represent numeric values.

let number: Number;

number = 4;

// String: Used to represent text.

let string = "Myros";
const string2 = "Preston";
const string3 = `hello`;

let string4: String;

// Boolean: Used to represent true or false values.

const bool: Boolean = true;

// Null: Represents the intentional absence of any object value.

let nullVar: null | string;

nullVar = "hello world";

// Undefined: Represents an uninitialized variable.

let name4: undefined | number;

name4 = 4;

// Array: Used to store multiple values in a single variable.

let days = ["mon", "wed", "fri"];

let months: Array<number>;

months = [1, 2, 3, 4];

console.log(days[0]);

// Object: Used to store a collection of key-value pairs.

type Person = {
	name: string;
	age: number;
};

let myObj: Person = {
	name: "Myros",
	age: 14,
};

// Tuple: Used to store an array with a fixed number of elements of different types.

// Enum: Used to define a set of named constants.

// Any: Used to store any type of value. Use with caution as it can defeat the purpose of TypeScript's type safety.

// Void: Used to represent the absence of any type, commonly used as the return type of functions that do not return a value.
