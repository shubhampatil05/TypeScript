"use strict";
function fullName(name) {
    return name.firstName + " " + name.lastName;
}
const User = { firstName: "Jenny", lastName: "Morgan" };
console.log(fullName(User));
const Emp = {
    company: "TCS",
    salary: 100000,
    job: () => "A Senior Developer",
};
console.log(Emp);
