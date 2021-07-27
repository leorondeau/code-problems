/* 
    Postman Test
> "Here is the website containing API documentation for a cat API, and here is your API key. 
I want you to use Postman to retrieve data on a Main Coon"
> "Now I want you to retrieve a picture of a Main Coon with postman"
Whiteboard Test
> "Go to this Repl link, continue to share your screen. 
Go ahead and read the prompt and tell us what you are thinking as you code."
>
> Prompt:
> ```You are given three strings, “kasjfhhi” “yyjknaalkjs” “anewunnsii”. 
Using your favorite language, write a function called repeatedChar which returns 
the first letter of each string that occurs twice in a row in a new string. (10mins)
*/
// hyani
const arrayOfStrings = ['kasjfhhi', 'yyjknaalkjs', 'anewunnsii']



const repeatedChar = (string) => {
    // debugger
    const firstLetter = []
    for (let i = 0; i < string.length; i++) {
        for (var j = i + 1; j <= string.length; j++)
            if (string[j] == string[i])
            {firstLetter.push(string[i])}

    }
    return firstLetter
}


// console.log("solution", repeatedChar('yyjknaalkjs'))
// Return [letter(a), letter(b), letter(c)]

// set operator

// const repeatedChar = (string) => {
//     const splitString = string.split("")
//     return splitString
// }

// console.log("solution", repeatedChar('yyjknaalkjs'))