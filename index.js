function receivesAFunction(callback){
    return callback();
}
function returnsANamedFunction(){
    return function receivesAFunction(){};
}
function returnsAnAnonymousFunction(){
    return function (){};

}



    

