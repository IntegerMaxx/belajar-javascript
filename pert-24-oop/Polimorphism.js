class SmartPhones{
    constructor(color, brand, model){
        this.color = color;
        this.brand = brand;
        this.model = model;
    }

    charging(){
        console.log(`Charging ${this.model}`);
    }
}

class Android extends SmartPhones{
    // overriding constructor
    constructor(color, brand, model, device){
        super(color, brand, model)
        this.device = device;
    }

    /*
    PENJELASAN: Pada kodingan diatas, kita telah berhasil melakukan override pada 
    constructor. Untuk melakukan overriding kita harus memanggil constructor superclass
    dengan menuliskan keyword "super" diikuti oleh kurang buka - kurung tutup, kemudian isi
    dengan properties yang berada pada constructor superclass 
    */

    // overriding method charging
    charging(){
        super.charging();
        console.log(`Charging ${this.model} with fast charger`);
    }

    /*
    PENJELASAN: pada kodingan diatas kita berhasil melakukan overriding method, dan jika
    kita tetap ingin menjalankan method pada superclass kita bisa menggunakan keyword 
    "super" di ikuti dengan nama dari method sperti pada contoh diatas "super.charging();"
    */

    splitScreen(){
        console.log("Android bisa lipat layar");
    }
}



const samsung = new Android('white', 'B', 'Galaxy S21', 'smart TV');
samsung.charging();


















