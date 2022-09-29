const axios = require('axios');

axios.get('https://jsonplaceholder.typicode.com/posts')
.then((res)=> res.data)
.then((data) => {
    console.log(data);
})
.catch((error) => console.error(error));

//axios internally use xmlhttprequest


