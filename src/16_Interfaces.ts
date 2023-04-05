interface Person {
  firstName: string;
  lastName: string;
}
function fullName(name: Person) {
  return name.firstName + " " + name.lastName;
}

const User = { firstName: "Jenny", lastName: "Morgan" };

console.log(fullName(User));

// Type aliases and interfaces are very similar, and in many cases you can choose between them freely. Almost all features of an interface are available in type, the key distinction is that a type cannot be re-opened to add new properties vs an interface which is always extendable..

//=============================================

// Another Example

interface objType {
  company: string;
  salary: number;
  job: () => string; // it is a function returns a string value
}

const Emp: objType = {
  company: "TCS",
  salary: 100000,
  job: () => "A Senior Developer",
};
console.log(Emp);
