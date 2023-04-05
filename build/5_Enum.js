"use strict";
// An enum is a special "class" that represents a group of constants (unchangeable variables).
// Enums come in two flavors string and numeric. Lets start with numeric.
var Role1;
(function (Role1) {
    Role1[Role1["MANAGER"] = 0] = "MANAGER";
    Role1[Role1["EMPLOYEE"] = 1] = "EMPLOYEE";
})(Role1 || (Role1 = {}));
var Role2;
(function (Role2) {
    Role2["MANAGER"] = "XYZ";
    Role2["EMPLOYEE"] = "ABC";
})(Role2 || (Role2 = {}));
console.log(Role1);
console.log(Role2);
