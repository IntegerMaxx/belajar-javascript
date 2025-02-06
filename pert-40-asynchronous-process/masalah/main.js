// PENANGANAN ASYNCHRONOUS DENGAN AWAIT

import { doSomething } from "./utils.js";

console.log('Start.');

doSomething()
.then((value) => {
    console.log(value);
});

console.log('End.');

/*
PENJELASAN: Hasil keluaran dari kodingan diatas adalah seperti
dibawah ini

Start.
End.
You did it

Ini akan menjadi masalah jika kita menginginkan baris kode "End."
dijalankan terakhir dan "You did it" tetap ditengah. Untuk mengatasi
hal itu kita membutuhkan "await"
*/




























