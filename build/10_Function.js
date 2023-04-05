"use strict";
// The type of the value returned by the function can be explicitly defined.
let add = (a, b) => {
    return a + b;
};
console.log(add(10, 10));
//-------------------
const Name = () => {
    return "Learn";
    // if try to return a numeric value it throws an error
};
console.log(Name());
