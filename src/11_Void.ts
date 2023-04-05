// The type void can be used to indicate a function doesn't return any value.

let day;

const getDay = (): void => {
  day = new Date().getDay();

  // If we try to return a value then it shows error coz type of function in "void"
};

getDay();
console.log(day);
