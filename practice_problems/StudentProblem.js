let map = new Map();
map.set("Arya", 50);
map.set("Shivi", 75);
map.set("Rudra", 65);
map.set("Nick", 95);
map.set("Mish", 80);

let sum = 0;
let Number = 0;

for([Key, value] of map){
    sum += value;
    Number++;
    if(value<60)
    console.log(Key, "got", "E");
    else  if(value<70)
    console.log(Key, "got", "D");
    else  if(value<80)
    console.log(Key, "got", "C");
    else  if(value<90)
    console.log(Key, "got", "B");
    else  if(value<100)
    console.log(Key, "got", "A");
}
console.log("Average of all the candidate", sum/Number);




