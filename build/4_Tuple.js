"use strict";
// A tuple is a typed array with a pre-defined length and types for each index.
// Tuples are great because they allow each element in the array to be a known type of value.
// To define a tuple, specify the type of each element in the array:
let ourTuple;
// initialize correctly
ourTuple = [5, false, "text"];
// initialize Incorrectly
// ourTuple = [5, "false", "text"];
ourTuple.push("New text");
console.log(ourTuple);
// the new text is pushed successfully because we did not mention the type of
