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
    return spy());
}