import { doSomething } from './utils.js';

function onFulfilled(doSomethingData){
    // lakukan pekerjaan ketika "fulfilled" terjadi
    console.log(doSomethingData);
}

function onRejected(doSomethingError){
    // lakukan pekerjaan ketika "rejected" terjadi
    console.log(doSomethingError);
}

doSomething().then(onFulfilled, onRejected);



































