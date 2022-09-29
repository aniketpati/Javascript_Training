const arr = [1, 2, 3, 4, 5];

for(num of arr){
    console.log(num);
}
//forOf loop iterator over array if we use forIn loop it will
//iterate over the keys so very good for iterating over objects 
const obj = {
    "firstName": "Aniket",
    "lastName": "Pati",
}

for(key in obj){
    console.log(obj[key]);
}

//forEach loop act same 

arr.forEach(element => {
    console.log(element);
});

