export function makeCoffee(){
    // 1000 milidetik = 1 detik
    const estimasiWaktu = 2000;

    const inSecond = Math.ceil(estimasiWaktu / 1000);
    console.log(`Mohon menunggu. Pramusaji sedang membuatkan kopi dalam ${inSecond} detik`);

    setTimeout(() => {
        // Do something tasks to make coffee....
        console.log('Pramusaji selesai membuat kopi.');
    }, estimasiWaktu);
}

/*
PENJELASAN: pada kodingan diatas walaupun variabel "estimasiWaktu" kita
ubah menjadi "0" function "setTimeout()" tetap akan dijalankan terakhir
karena dia "ASYNCHRONOUS PROCESS" sehingga dia tetap akan dijalankan
belakangan
*/























