"use strict";
// It is mostly not used
// lets try an example
const apiError = (msg, errCode) => {
    throw { msg, errCode };
};
console.log(apiError("Server Side Error", 500));
