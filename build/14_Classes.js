"use strict";
class Users {
    addUser(user) {
        return `${user} is added`;
    }
}
let result = { firstName: "Jenny", lastName: "Morgan" };
let res = new Users();
console.log(res.addUser("Jenny"));
//--------------
