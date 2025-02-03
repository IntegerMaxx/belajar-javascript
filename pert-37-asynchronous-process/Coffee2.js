export function makeCoffee(callback){
    const estimasiWaktu = 5000;

    const inSecond = Math.ceil(estimasiWaktu / 1000);
    console.log(`Mohon menunggu. Pramusaji sedang membuatkan kopi dalam ${inSecond} detik`)

    setTimeout(() => {
        // lakukan sesuatu tugas untuk membuat kopi
        
        console.log('Pramusaji selesai membuat kopi.');
        // ini callback function
        callback();
    }, estimasiWaktu);
    
}

export function sendoffee(callback){
    const estimasiWaktu = 2000;
    
    console.log('Pramusaji sedang mengantarkan kopi pesanan');
    
    setTimeout(() => {
        // lakukan sesuatu tugas untuk mengatar kopi

        console.log('Pramusaji sudah sampai ke meja.');
        // ini callback function
        callback();
    }, estimasiWaktu);

}























