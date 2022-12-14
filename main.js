// Q. 1

function withNoParameter(){
    console.log("This is the function without any parameter");  
}

withNoParameter()

//  Q. 2

function addTwoValues (a , b ){
    console.log(a+b);
}

addTwoValues(3,56)
//Q. 3

// Example of Arrow function 


let arrowfunction = () => {
    console.log('This is an arrow function example');
}

arrowfunction();


// Q.4 


var x = 21;
var girl = function () {
    console.log(x);
    var x = 20;
};
girl ();

// Q.5 


var x = 21;
girl ();
console.log(x)
function girl() {
    console.log(x);
    var x = 20;
};



// Q.6 



var x = 21;
a();
b();

  function a() {
    
   x = 20;
  console.log(x);
};
 function b() {
    
    x = 40;
   console.log(x);
};


// Q.7 

console.log("This is for factorial: ");

// fact = 0 ;
// function Factorial (n){
//     if (n === 1){
//         fact =  1;
//     }
//     else {

//         fact = n ;

      
//         for ( let i = n ; i >1 ; i--){
//              fact = fact * (i-1);
//         }
//     }
//     return fact;
// }


function factorial(n){
    let fact = 1;
    for(let i=n; i>=1; i--){
        fact *= i
    }
    return(fact)
}

console.log(factorial(5));


