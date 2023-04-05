// const person: object = {
//   name: "Shubham",
//   age: 25,
// };

//console.log(person.name);  in this case it shows that the name property does not exist in object..it works as an empty obj

// it happens coz we did not mention the data types of properties

//-----------------------------------

// here is the solution

// const person: { name: string; age: number } = {
//   name: "Jonas",
//   age: 25,
// };

// console.log(person.name); // now it works perfectly

// //------------------------

// const user: { name: string; age: number } = {
//   name: "Jenny",
//   age: 23,
// };

// as we can see the above two examples the data types of properties are repeating

// So here is the solution for that

type dataType = {
  name: string;
  age: number;
};

const person: dataType = {
  name: "Jonas",
  age: 25,
};

//------------------------

const user: dataType = {
  name: "Jenny",
  age: 23,
};

// console.log(person);
// console.log(user);
