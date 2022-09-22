if (typeof localStorage === "undefined" || localStorage === null) {
    var LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./scratch');
  }


class user{
    constructor(
        username,
        firstname,
        lastname,
        address
    ){
        this.username = username;
        this.firstname = firstname;
        this.lastname = lastname;
        this.address = address;
    }
}

const Aniket = new user("rey", "aniket", "pati", "Bankura");
const array = [];
array.push(Aniket);

//Store 
localStorage.setItem('userdata',
JSON.stringify(array));

//Retrive
let user1 = JSON.parse(localStorage.getItem('userdata'));
console.log(user1);


