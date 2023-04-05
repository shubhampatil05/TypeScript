// Without generics, we would either have to give the identity function a specific type:

function identity1(arg: number): number {
  return arg;
}

console.log(identity1(10));

//---------------------------------

// Or, we could describe the identity function using the any type:

function identity2(arg: any): any {
  return arg;
}

console.log(identity3(10));

//While using any is certainly generic in that it will cause the function to accept any and all types for the type of arg, we actually are losing the information about what that type was when the function returns. If we passed in a number, the only information we have is that any type could be returned.

//---------------------------------

function identity3<Type>(a: Type): Type {
  return a;
}

console.log(identity3(10));

// We’ve now added a type variable Type to the identity function. This Type allows us to capture the type the user provides

//Here we provides number..generics lock that type as number and return the exact type of value

//===================

// Another Example With Array

function createPairs<S, T>(v1: S, v2: T): [S, T] {
  return [v1, v2];
}

console.log(createPairs("Hello", 25));

//-------------------------------

function loggingIdentity<Type>(arg: Type[]): Type[] {
  console.log(arg.length);
  return arg;
}

console.log(loggingIdentity([10, "20", 30]));

//===================================

// return the array of object using generics

function array<Type>(arr: Type[]): Type[] {
  return arr;
}

console.log(
  array([
    { name: "shubham", age: 25 },
    { name: "ankur", age: 27 },
    { name: "virag", age: 28 },
  ])
);
