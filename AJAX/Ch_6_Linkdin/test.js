function x(){
    for(var i=1; i<=5; i++){
        setTimeout(function(){
            console.log(i, " ");
        }, i*1000);
    }
}

x();
//output of above code is 6 6 6 6 6 because of closure, it is printing
// the reference to i.

//if we use let instead, it will be 1 2 3 4 5 because let is blocked scoped 
//else we can  add a extra function

function x(){
    for(var i=1; i<=5; i++){
        function close(x) {
        setTimeout(function(){
            console.log(x, " ");
        }, x*1000);
    }
    close(i);
    }
}

x();


