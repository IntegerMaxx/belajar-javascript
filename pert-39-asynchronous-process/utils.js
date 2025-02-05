function promiseExecutor(resolve, reject){
    setTimeout(() => {
        console.log('Melakukan sesuatu sebelum Promise diselesaikan');

        // Penentuan hasil dari proses asinkron
        const number = Math.random();

        if(number > 0.5){
            resolve('You did it!');
        } else {
            reject('Sorry, something went wrong!');
        }


    }, 2000);
}

export function doSomething(){
    return new Promise(promiseExecutor);
}

/*
PENJELASAN: pada kodingan diatas kita menerapkan Class "Promise()" pada
function "doSomething()". yang dimana dia akan mengembalikan nilai yang di
tangkap oleh function "promiseExecutor()"

*/







































