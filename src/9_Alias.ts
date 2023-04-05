// Type Aliases allow defining types with a custom name (an Alias).

// Type Aliases can be used for primitives like string or more complex types such as objects and arrays

// define type like a variable and reuse it

//--------------------------

// alias with variable

type x = number | string | undefined | boolean;

//  We can use the above four types with passing x as a type

let a: x = 10;
let b: x = "Hello";
let c: x = true;
let d: x;

console.log(a, b, c, d);

// Alias with Object

type nameType = string;
type ageType = number;

const employee: { name: nameType; age: ageType } = {
  name: "jonas",
  age: 27,
};

console.log(employee);
