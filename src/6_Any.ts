// Any is One of the special type in ts
// 1)any

// Without any
// let u = true;
// u = "string"; // Error: Type 'string' is not assignable to type 'boolean'.
//----------------------
// With any
let v: any = true;
v = "string"; // no error as it can be "any" type
//----------------------------------------
