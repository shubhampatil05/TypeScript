// unknown is a similar, but safer alternative to any.

// let's checks how??

let value: any = 10;

// the type of data variable could be any

let item: string;

// but technically the type of item has to be string and it accepts only string values..but it accepting the numeric values..thats why the type "unknown" is safer option compare to type "any"

item = value;

console.log(item);

//---------------------------

// let's try same example with type unknown

let val: unknown = 10;

let str: string;

// str = val;
//Type 'unknown' is not assignable to type 'string'

// console.log(str);
