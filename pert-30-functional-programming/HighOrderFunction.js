// POTENSI TERSEMBUNYI SEBUAH FUNGSI (HIGH-ORDER FUNCTION)
/*
PENJELASAN: HOF(HIGH-ORDER FUNCTION) adalah function yang menerima function
lainnya sebagai argumen atau/dan mengembalikan sebuah fungsi lain
*/

// HOF IMPLEMENTATION

function apply(operation, ...args){

    return operation(...args);
}

function sum(a, b, c){
    return a + b + c;
}

function discount(dics, value){
    return value - ((dics / 100) * value);
}


const productPrice = apply(sum, 100, 100, 200); // misal harga nilai produksi, perkomponen/biaya kirim
const withDiscount = apply(discount, 25, productPrice);

console.log('Product price:', productPrice);
console.log('With discount 25%:', withDiscount);


























