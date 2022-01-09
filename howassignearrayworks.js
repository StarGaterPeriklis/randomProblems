// Bro run this code ,its interesting to see whats going on!

//ASSIGNING OF VARIABLES
let varA = "hohoho"
let varB = varA

console.log(varA)
console.log(varB)

varA = "hihihi"

console.log(varB)

//ASSIGNING OF ARRAYS 1
let arrOne =[1,2,3] ;
let arrTwo = arrOne ;

console.log(arrOne) ;
console.log(arrTwo) ;

arrOne.push(00,1) ;
console.log(arrTwo) ;

arrTwo.push(55) ;
console.log(arrOne)

console.log(arrOne === arrTwo)

//ASSIGNING OF ARRAYS 2
let arrThree =[1,2,3,55]
let arrFive =[1,2,3,55]

console.log(arrThree === arrFive)
