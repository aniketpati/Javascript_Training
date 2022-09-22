import Book from "./mod2.js";

const Meluha = new Book(
    "amish",
    "thriller",
    true
)

console.log(Meluha.name, Meluha.genre, Meluha.isAvailable);
Meluha.mustRead("yes");
