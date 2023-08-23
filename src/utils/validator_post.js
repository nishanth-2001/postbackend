const validateAndGetPaginationPostData = (inputLimit, inputStart) => {
  const returnObj = {
    start: 0,
    limit: 3,
    errMsg: "",
  };

  if (inputLimit !== undefined) {
    if (isNaN(inputLimit)) {
      returnObj.errMsg = "Invalid Limit";
      return returnObj;
    } else {
      returnObj.limit = Math.floor(Number(inputLimit));
    }
  }
  if (inputStart !== undefined) {
    if (isNaN(inputStart)) {
      returnObj.errMsg = "Invalid Start";
      return returnObj;
    } else {
      returnObj.start = Math.floor(Number(inputStart));
    }
  }

  return returnObj;
};

const validateString = (value) => {
  const valueType = typeof value;
  if (valueType !== "string" || value === "") {
    return false
  } 
  return true
};


module.exports = { validateAndGetPaginationPostData, validateString }

