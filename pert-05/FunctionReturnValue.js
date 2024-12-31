const result = console.log('JavaScript Keren!');
console.log(result);

/*
PENJELASAN: Pada kodingan diatas output code adalah
undefined, itu karena console.log tidak mengembalikan 
nilai. Dan JavaScript tidak menganggap ini sebagai
error.
*/


function sumNumbers(a, b){
    const result = a + b;
    return result;
}

const result2 = sumNumbers(2, 4);
console.log(`2 + 4 = ${result2}`);

function generateGreetingWorldMessage(){
    return 'Hello World!';
    console.log('Baris ini tidak dieksekusi');
}

const message = generateGreetingWorldMessage();
console.log(message);