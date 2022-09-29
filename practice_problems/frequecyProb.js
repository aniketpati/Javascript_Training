
function frequncy(str){
    for(let i=0; i<str.length; i++){
        let count = 1;
        while(i+1 < str.length && str.charAt(i) == str.charAt(i+1)){
            count++;
            i++;
        }
        console.log(`${str.charAt(i)}${count}`);
    }
}

frequncy("aabbaaaccbb");