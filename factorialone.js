//write a program that calculates the factorial
//whatever n is.
//print out analyticaly what is going on
//also in an other line the result.

const facof = 4 ;

let analysis = "" ;

let result = 0 ;

for(let x = facof ; x > 0 ; x -= 1 ){
    analysis *= x ;
}

console.log(analysis) ;
console.log(result) ;

//analysis output should be 4*3*2*1
//result output should be 24