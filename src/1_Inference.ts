let data = 20;

// Ts auto detect the data type..and we cannot assign the the value with different data type in future

// lets try

// data = "hello"; // shows error

data = 50;

//----------------

let random;
random = 10;
random = "welcome";

// This not showing an error because the type is "any" that means we can pass any data types

console.log(random);
