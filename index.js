const { spy } = require("chai");

function returnsAnAnonymousFunction() {
    return function(){
        console.log("Yummy");
    }
}
function returnsANamedFunction() {
    return function test(){
        console.log("Yuummy");
    }
}

function receivesAFunction(spy){
    spy()
}

