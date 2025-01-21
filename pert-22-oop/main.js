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

class iOS extends SmartPhones{
    airDrop(){
        console.log('iOS have a behavior AirDrop');
    }
}

class Android extends SmartPhones{
    splitScreen(){
        console.log('Android have a Split Screen');
    }
    
}

const ios = new iOS('black','A','12 Pro Max');
const android = new Android('white', 'B', 'Galaxy S21');

ios.charging();
ios.airDrop();

console.log("\n");

android.charging();
android.splitScreen();

console.log("\n");

console.log(ios instanceof SmartPhones);
console.log(android instanceof SmartPhones);

/*
PENJELASAN: pada kodingan diatas jika kita ingin mengetahui apakah
object yang dimaksud dari adalah inheritance dari superclass
yang dimaksud. Untuk melakukan itu kita dapat menggunakan keyword
"instanceof" >> ini akan mengembalikan nilai boolean true, jika 
benar object yang dimaksud diwariskan dari class yang dimaksud

Sementara kodingan dibawah ini untuk mengecek apakah object
"android" adalah instance dari class "iOS". Setelah di cek, dia 
mengembalikan nilai "false" yang artinya android bukan instance
dari "iOS"
*/

console.log(android instanceof iOS);


































