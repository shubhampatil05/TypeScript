"use strict";
// Union types are used when a value can be more than a single type.
// Such as when a property would be string or number.
const sum = (a, b) => {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    else {
        return a.toString() + " " + b.toString();
    }
};
console.log(sum(1, 2));
console.log(sum("Shubham", "Patil"));
//----------------------
// with variable
let x;
console.log(10);
console.log("10");
//-----------------------
// We can avoid union type by using "type any" but most developers prefers "union" because it allows you to use benefits of typescript
