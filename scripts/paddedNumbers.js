console.log("yes")
// Complete the solution so that it returns a formatted string. The return value should equal 
// "Value is VALUE" where value is a 5 digit padded number.
// Example:
// solution(5) // should return "Value is 00005"



const paddedNumber = (n) => {
    const convertToString = n + ''
    let paddedFive = '0000' + convertToString
   console.log(paddedFive.length)
    if(paddedFive.length >= 5) {
        paddedFive.slice(0)}

    
    
    // if(convertToString > 9){paddedFive = '000'+ convertToString}
    return paddedFive
}

console.log(paddedNumber(10))