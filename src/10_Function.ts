// The type of the value returned by the function can be explicitly defined.

let add = (a: number, b: number) => {
  return a + b;
};

console.log(add(10, 10));

//-------------------

const Name = (): string => {
  return "Learn";
  // if try to return a numeric value it throws an error
};

console.log(Name());
