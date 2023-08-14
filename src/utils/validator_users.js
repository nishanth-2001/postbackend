const validateAndGetPaginationData = (inputLimit, inputStart) => {
const returnObj = {
    start:0,
    limit:5,
    errMsg:""
}

if (inputLimit !== undefined) {
    if (isNaN(inputLimit)){
        returnObj.errMsg  = "Invalid Limit"
        return returnObj
    } else {
        returnObj.limit = Math.floor(Number(inputLimit))
    }
}

return returnObj
}

module.exports = {validateAndGetPaginationData}