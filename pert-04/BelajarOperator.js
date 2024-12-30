const d = 5 + 3;

if(typeof d == "number"){
    print("Hello World");
}

print(typeof "IntegerMaxx" , "\n");

function print(args){
    console.log(args);
}

// UNARY, BINARY, TERNARY => OPERATOR
let age = 25;

// Unary Operator
typeof age;

// Binary Operator
5 + 4;
10 / 2;
age = 30;

// Ternary Operator
(age < 18) ? 'You are too young!' : 'Welcome onboard!';

console.log(typeof age, age);

print('');
// STRING OPERATOR
const first = 'bekerja';
const second = 'sama';
const merge = first + second;

print(merge);

// KESALAHAN PENULISAN!!
const tambah1 = "2";
const tambah2 = 2;
const hasil = tambah1 + tambah2;

print(hasil); 
