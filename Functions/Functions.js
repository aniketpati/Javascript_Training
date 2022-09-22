//Function declaration
function doMath(a, b){
    let c = a + b;
    return c;
}
//this function are hoisted -> global scope

//Function expression
const value = function(a, b){
    let c = a*b;
    return c;
}
//not hoisted limited scope 

console.log(doMath(1, 2));
console.log(value(2, 3)); //if we do not pass anything will get NaN

//Immediately Invoked function Expression

(function() {
    let a = 3;
    let b = 5;
    let c = doMath(a, b);
    console.log(c);
})();

//Arrow function
const arrow = () => console.log("Hello world");
arrow();

const arrow1 = (a) => {
    return a+100
}
console.log(arrow1(200));

// (a) => 
