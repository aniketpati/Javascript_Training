const arr = [5, 1, 2, 6, 3];

/*
By using map we can double, triple the values in the array
*/

function double(x){
    return x*2;
}


const doub = arr.map(double);
console.log(doub);

const bin = arr.map((x) => x.toString(2));
console.log(bin);

/*
filter is used to filter a logic onto a array
*/

function isOdd(x){
    return x%2;
}

const odd = arr.filter(isOdd);
console.log(odd);

const even = arr.filter((x)=> x%2 === 0)
console.log(even);

const great4 = arr.filter((x)=>x>4);
console.log(great4);


/*
reduce array to a single number
*/

const sum = arr.reduce((acc, curr) => {
    acc = acc + curr;
    return acc;
}, 0);
console.log(sum);


const max = arr.reduce((max_, curr) => {
    if(max_<curr)
    max_=curr;
    return max_;
}, 0);
console.log(max);

//----------------------------Example
const users = [
    {firstName: "Aniket", lastName: "Pati", age: 56},
    {firstName: "saikat", lastName: "Pat", age: 14},
    {firstName: "aahhaha", lastName: "hdhdh", age: 35},
    {firstName: "dhdhdhd", lastName: "hahah", age: 65}
];

const fullName = users.map((x) => x.firstName + " " + x.lastName);

console.log(fullName);

//acc = {56: 1 , 14: 1} --> age frequency
const freq = users.reduce(function(acc, curr){
    if(acc[curr.age]){
        acc[curr.age]++;
    }
    else{
        acc[curr.age] = 1;
    }
    return acc;
}, {});
console.log(freq);


//first name of all the user with age less than 30

const fil = users.filter((x)=> x.age>30)
.map((x) => x.firstName);
console.log(fil);








