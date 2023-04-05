// Apply values rather than applying types to a variable or in a function parameter

const fun = (
  a: string | number,
  b: string | number,
  type: "as-number" | "as-string"
) => {
  if (type === "as-number") {
    return +a + +b;
  } else {
    return a.toString() + b.toString();
  }
};

console.log(fun(10, "20", "as-number"));

// if we pass a type ==="as-number" it converts string into numeric because we use (+a) + (+b) at the returning

console.log(fun(10, 20, "as-string"));

// if we pass a type ==="as-string" it converts number into string because
