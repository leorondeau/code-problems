/*
    Write a function to represent Floyd Triangle, given input is the number of rows of the Floyd triangle
    Example if the number of rows is 3
    Result:
    1
    2 3
    4 5 6





    2 Write a  program to print all permutations of a given String. For example, if given String is "GOD" then your program should print all 6 permutations of this string, 
    e.g. "GOD," "OGD," "DOG," "GDO," "ODG," and "DGO."



    

    *write a function that checks if two provided strings are anagrams of each other; letter casing shouldn’t matter. Also, consider only characters, not spaces or punctuation. For example
    anagram('finder', 'Friend')  --> true
    anagram('hello', 'bye') --> false

*/

//  const anagram = (wordOne, wordTwo) => {
//     debugger
//     const firstWord = wordOne.split('').sort()
//     const secondWord = wordTwo.split('').sort()
//     const firstJoin = firstWord.join()
//     const secondJoin = secondWord.join()
//     const comp = (firstJoin === secondJoin) ? "anagram" : "not anagram"
//     return comp
// }
//  console.log(anagram('hello','bye'))

// const permut = (string) => {
//     // debugger
//     if (string < 2) {
//         return string
//     }
//     let permutations = []
//     for (let i = 0; i < string.length; i++) {
//         let char = string[i]
//         if (string.indexOf(char) != i)
//             continue
//         let remainingString = string.slice(0, i) + string.slice(i + 1, string.length); //Note: you can concat Strings via '+' in JS
//         for (let subPermutation of permut(remainingString)){ 
//             permutations.push(char + subPermutation)}
        
//     }
//     return permutations
// }


// const myString = "dog";
// console.log('mystring', permut(myString))
// let permutations = permut(myString);
// for (permutation of permutations) {
//     console.log('perm', permutation)
// }

// function permut(string) {
//     if (string.length < 2) return string; // This is our break condition
  
//     let permutations = []; // This array will hold our permutations
//     for (var i = 0; i < string.length; i++) {
//       var char = string[i];
  
//       // Cause we don't want any duplicates:
//       if (string.indexOf(char) != i) // if char was used already
//         continue; // skip it this time
  
//       var remainingString = string.slice(0, i) + string.slice(i + 1, string.length); //Note: you can concat Strings via '+' in JS
  
//       for (var subPermutation of permut(remainingString))
//         permutations.push(char + subPermutation)
//     }
//     return permutations;
//   }

//   var myString = "xyz";
//  let permutations = permut(myString);
//  for (permutation of permutations)
//    console.log(permutation)