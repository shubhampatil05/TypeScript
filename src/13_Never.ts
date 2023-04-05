// It is mostly not used

// lets try an example

const apiError = (msg: any, errCode: any): never => {
  throw { msg, errCode };
};

console.log(apiError("Server Side Error", 500));
