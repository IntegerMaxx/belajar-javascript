import { doSomething } from './utils.js';

async function promiseWithAsyncAwait() {
  try {
    console.log('Start.');

    const result = await doSomething();
    console.log(result);

    console.log('End.');
  } catch (error) {
    console.log(error.message);
  }
}

promiseWithAsyncAwait();

/* Output:
Start.
You did it.
End.
*/

/*
PENJELASAN: jika kita menggunakan "await", kita dapat menggunakan
block kode "try" dan "catch" untuk penanganan error.
*/