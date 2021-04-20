console.log('Its works');

//Promise
//1. The Promise are used in Async Operation
//2. Promise has 3 State
    //2.1  Pending
    //2.2 Fulfilled -> Success
    //2.3 Rejected  -> Error
//3. Promise is a built in class

//Lets create a promise

//The Promise result can be handled using 3 methods
//1.  then method       => Success
//2.  catch method      => Error
//3.  finally method    => Will execute 


// let promiseObj = new PromiseClass(cbfn);

//global variable
let v = false;
let promiseObj = new Promise(function(resolve, reject){
    if(v == true){
        resolve('The value is true');
    }else{
        //Error block
        reject('The value is false');
    }
});

console.log(promiseObj);
/**
 * The syntax of then() method is:

    promiseObject.then(onFulfilled, onRejected);
 */
promiseObj.then(function(value){
    console.log('The Async Operation is succesful '+value);
}).catch(function(value){
    console.log(`The Async Operation is failed due to error ${value} `);
}).finally(function(value){
    console.log('This block will execute everytime');
});