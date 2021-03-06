
// Complete the solution so that it returns a formatted string. The return value should equal 
// "Value is VALUE" where value is a 5 digit padded number.
// Example:
// solution(5) // should return "Value is 00005"

const contentTarget = document.querySelector('#container')
paddedNumberHTML = contentTarget.innerHTML

const paddedNumber = (n) => {
    const convertToString = n + ''
    let paddedFive = '0000' + convertToString
    if (paddedFive.length > 5) {
        let numberToSlice = convertToString.length - 1
        return paddedFive.slice(numberToSlice)
    }
    else {
        return `${paddedFive}`  
    }
}


console.log(paddedNumber(103))
    // if(convertToString > 9){paddedFive = '000'+ convertToString}