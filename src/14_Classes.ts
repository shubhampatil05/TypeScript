class Users {
  addUser(user: string) {
    return `${user} is added`;
  }
}

let result = { firstName: "Jenny", lastName: "Morgan" };
let res = new Users();

console.log(res.addUser("Jenny"));

//--------------
