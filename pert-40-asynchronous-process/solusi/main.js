// PENANGANAN ASYNCHRONOUS DENGAN AWAIT

import { doSomething } from "./utils.js";
 
async function promiseWithAsyncAwait() {
  console.log('Start.');
 
  const result = await doSomething();
  console.log(result);
 
  console.log('End.');
}
 
promiseWithAsyncAwait();
 
/* Output:
Start.
You did it.
End.
*/

/*
PENJELASAN: sebenarnya "await" disini digunakan agar kita dapat
mengeksekusi kode secara berurutan. Kode "End." tidak akan pernah
dieksekusi sebelum "await doSomething()" dijalankan.
*/



























