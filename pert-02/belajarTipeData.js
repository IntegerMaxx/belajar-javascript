"Ini merupakan contoh string di JavaScript"
'Ini merupakan contoh string di JavaScript'
// `Ini merupakan contoh string di JavaScript`

"Baris pertama.\nBaris kedua."
'Baris pertama.\nBaris kedua.'
// `Baris pertama.
// Baris kedua.`

const currentYears = new Date().getFullYear();
const text = `Sekarang adalah tahun ${currentYears}\n`; // Template Literals Implementation
console.log(text);

const result = 50 / 0;
const result2 = Number('Dicoding');

if(result == Infinity){
    console.log(`Ohhh tidak result = ${result}`);
}


let test =  Number.isNaN(result2); // menecek nilai
console.log(test);

if(Number.isNaN(result2)) {
    console.log(`Astagah result2 = ${result2}`); // output: NaN
};

// BOOLEAN
const completed = true;
const passed = false;

console.log(completed, passed); // output: true false

const umurDewasa = 25 > 21;
console.log(umurDewasa); // output: true


// NULL DAN UNDEFINED
const name1 = { first: 'Dicoding', last: null };
const name2 = { first: 'Dicoding', last: undefined };

console.log(`\n${JSON.stringify(name1)}`); // output: {"first":"Dicoding","last":null}
console.log(JSON.stringify(name2)); // output: {"first":"Dicoding"}