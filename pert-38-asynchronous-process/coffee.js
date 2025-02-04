export function makeCofee(name, callback){
    const estimasiwaktu = 5000;
    let isSuccess = false;
    
    const inSecond = Math.ceil(estimasiwaktu / 1000);
    console.log(`Mohon menunggu. Pramusaji sedang membuatkan kopi dalam ${inSecond} detik`)
    
    setTimeout(() => {
        // Penentuan hasil dari asinkron
        const number = Math.random();
        if (number > 0.3){
            isSuccess = true;
        }
        
        if(!isSuccess){
            callback(new Error('Gagal membuat kopi'), null);
            return;
        }
        
        console.log('Pramusaji selesai membuat kopi.');
        callback(null, name);
    }, estimasiwaktu);
}

export function sendCoffee(name, callback){
    const estimasiwaktu = 2000;
    let isSuccess = false;

    console.log('Pramusaji sedang mengantarkan kopi pesanan');

    setTimeout(() => {
        // Penentuan hasil dari proses asinkron
        const number = Math.random();
        if (number > 0.3) {
            isSuccess = true;
        }

        if (!isSuccess) {
            callback(new Error('Gagal mengantarkan kopi.'), null);
            return;
        }

        console.log('Pramusaji sudah sampai ke meja.');
        callback(null, name);
    }, estimasiwaktu);


}
































