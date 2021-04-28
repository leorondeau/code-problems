
const ar = ["U","D","D","D","U","D","U","U"]

export const countingValleys = (path) => {
// debugger
    let sealevel = 0
    let valley = 0
    for (let p of path) {
        
        if (sealevel === 0 && p === "D" ) { valley++ }
        if (p === "U") { sealevel++ }
        if (p === "D") { sealevel-- }
    }
    return valley
}







// for (n = 0; n < newPath.length; n++) {
//     const valley = []
//     if ((newPath[n] + newPath[n+1]) < 0) {valley.push(1)}
//     if (())

// 4D = -4
// 4U = 4
// It always has to equal zero
// You can never have steps in a row > S/2 
// max steps in a row =< s/2
// max valleys s/2
// min valleys 0