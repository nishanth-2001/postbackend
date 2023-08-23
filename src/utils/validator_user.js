const {validateAndGetPaginationUserData} = (inputLimit, inputStart) => {
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

module.exports = {validateAndGetPaginationUserData}