const collection = ["abc", "a", "as"];
console.log(collection);
console.log(collection[collection.length]);

let arr = [1, 2, "Ab"]
arr.push("nj", 90); //push at the end 
console.log(arr); 
arr.pop(); //pop from the end of the array

arr.shift(); //will remove from the front of the array
console.log(arr);

arr.forEach(element => {
   console.log(element); 
});

//taking last item and push it at the front 
let last = arr[arr.length-1];
arr.unshift(last); //will push to the front
arr.pop();
console.log(arr);

arr.push("ZZ");
arr.sort();
console.log(arr); //Numbers-> capital letters->small letters

//find a item
const foundItem = arr.find((item)=>item==="Ab");
console.log(foundItem);

//delete a specific item

let remove = "ZZ";
arr.splice(arr.indexOf(remove), 1); //splice takes index and number of element from the position

console.log(arr);






