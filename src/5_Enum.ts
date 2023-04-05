// An enum is a special "class" that represents a group of constants (unchangeable variables).

// Enums come in two flavors string and numeric. Lets start with numeric.

enum Role1 {
  MANAGER,
  EMPLOYEE,
}

enum Role2 {
  MANAGER = "XYZ",
  EMPLOYEE = "ABC",
}

console.log(Role1);
console.log(Role2);
