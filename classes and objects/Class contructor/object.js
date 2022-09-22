//import Backpack from "./app.js";
const Backpack = require('./app.js');

const diesel = new Backpack(
    "dailyUse",
    "30",
    "red",
    true
)

console.log(diesel.color, diesel.name);
diesel.strap(50);