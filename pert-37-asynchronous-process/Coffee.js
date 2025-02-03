export function makeCoffee(callback){
    const estimasiWaktu = 5000;

    const inSecond = Math.ceil(estimasiWaktu / 1000);
    console.log(`Mohon menunggu. Pramusaji sedang membuatkan kopi dalam ${inSecond} detik`)

    setTimeout(() => {
        console.log('Pramusaji selesai membuat kopi.');

        // ini callback function
        callback();
    }, estimasiWaktu);

}


/*
PENJELASAN: Pada kodingan diatas, kita membuat sebuah callback function,
dimana ketika kita memanggil fungsi "makeCoffee()" pada file "Main.js"
maka dia menerima parameter "callback()" yang selanjutnya bisa kita isi
dengan sebuah arrow function. Nah, setelah diisi, kita memanggil callback
function tersebut di dalam fungsi "setTimeout".

Jadi untuk CALLBACK disini digunakan untuk menangani proses asynchronous
*/















