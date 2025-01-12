// CONTOH OBJECT ERROR
// const error = new Error('Terjadi error');
// pt(error);

// CONTOH KASUS
const price = 100;
const paid = 80

// if(paid < price){
//     throw new Error('Pembayaran Kurang');
// }

pt("Hello world");

/*
PENJELASAN: jadi pada kodingan diatas itu jika ada 
harga bayar yang lebih kecil dari harga barang
maka program akan melemparkan error dan tidak akan
mengeksekusi kode program dibawahnya.
*/

// SOLUSI >> CATCHING ERROR


pt("\n");


// TRY-CATCH
try{
    pt('Memulai Program');
    pt('Mengakhiri Program');
} catch {
    pt('Karena tidak ada error, block ini akan diabaikan');
}

pt("\n");

try{
    pt('Memulai Program');
    throw new Error('Error: Program berhenti');

    pt('Mengakhiri Program'); // ini tidak dapat dieksekusi
} catch (err) {
    pt('Karena ada error, blok ini akan dieksekusi');
} 

pt("Hello world"); // Ini bisa dieksekusi


/*
PENJELASAN:
try >> jadi blok kode try itu kita mencoba kodenya dan selama
percobaan jika ditemukan error langsung alihkan ke blok kode
catch

catch >> catch yang akan melanjutkan eksekusi kode, namun untuk
mengingatkan bahwa pada program kita telah terjadi error masukkan
perintah print("Terjadi Error"); pada program kita 

namun jika memang tidak terjadi error maka blok kode catch akan
diabaikan
*/


pt("\n");

// FINALLY

try {
    console.log('Ini try block');
    throw new Error('Error: Program berhenti');
} catch (err) {
    console.log('Ini catch block');
} finally {
    console.log('Ini finally block');
}


/*
PENJELASAN: jadi block kode finally itu akan selalu dieksekusi 
walaupun tidak terjadi error pada block try atupun pada block try
terjadi error
*/





















































function pt(...args){
    console.log(...args);
}


