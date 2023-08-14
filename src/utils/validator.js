const validateAndGetPaginationData = (inputLimit, inputStart) => {
const returnObj = {
    start:0,
    limit:3,
    errMsg:""
}

if (inputLimit !== undefined) {
    if (isNaN(inputLimit)){
        returnObj.errMsg = "Invalid Limit"
        return returnObj
    } else {
        returnObj.limt = Math.floor(Number(inputLimit))
    }
}
if (inputStart !== undefined) {
    if (isNaN(inputStart)){
        returnObj.errMsg = "Invalid Start"
        return returnObj
    } else {
        returnObj.start = Math.floor(Number(inputStart))
    }


}

return returnObj
}

module.exports = {validateAndGetPaginationData }
