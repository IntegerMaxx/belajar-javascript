// ENCAPSULATION

/*
PENJELASAN: Jadi encapsulasi itu seperti teknik yang bisa kita gunakan
pada pemrograman berbasis object untuk membungkus data, agar data ini
aman dan tetap valid. 

Dengan adanya encapsulasi object hanya akan menampilkan data yang 
dibutuhkan oleh object lainnya.

Pada javaScript, property pada umumnya dapat diubah atau bersifat
muttable.

jadi pada JavaScript itu untuk method getter dan setter-nya harus
menggunakan keyword 'get' dan 'set'
*/

class CoffeMachine{
    constructor(waterAmount){
        this.waterAmount = waterAmount;
        this.temperature = 90;
    }

    set temperature(temperature){
        console.log("Kamu tidak di izinkan untuk mengubah temperaturnya");
    }

    get getTemperature(){
        return this.temperature;
    }

    makeCoffe(){
        console.log("Membuat kopi dengan suhu", this.temperature);
    }

}

const coffee = new CoffeMachine(100);
// coffee.temperature = 60; Masalah
console.log('Sebelum diubah: ', coffee.temperature);
coffee.temperature = 100;
console.log('Setelah diubah: ', coffee.temperature);

/*
PENJELASAN: Pada kodingan diatas saya berusaha mengubah properties "temperature"
menjadi 100, namun tidak dapat dilakukan dan mengembalikan error. 

*/

























