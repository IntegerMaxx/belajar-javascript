// KONVERSI NUMBER DAN BOOLEAN KE STRING
console.log("=======KONVERSI NUMBER DAN BOOLEAN KE STRING=======");
const number = 123;
const boolean = true;
const boolean2 = false;

console.log("sebelum. jenis data type", typeof number);
console.log("sebelum. jenis data type",typeof boolean);
console.log("sebelum. jenis data type",typeof boolean2);

const strNumber = String(number);
const strBoolean = String(boolean);
const strBoolean2 = boolean2.toString();

console.log("setelah. jenis data type",typeof strNumber);
console.log(`setelah. nilai = ${strBoolean}. jenis data type`,typeof strBoolean);
console.log("setelah. jenis data type",`${typeof strBoolean2}\n`);

// KONVERSI STRING DAN BOOLEAN KE NUMBER
console.log("=======KONVERSI STRING DAN BOOLEAN KE NUMBER=======");
const strNumber1 = '123';
const strFloat = '3.14';
const boolean1 = true;

console.log(`sebelum. jenis data type ${typeof strNumber1} = ${strNumber1}`); 
console.log(`sebelum. jenis data type ${typeof strFloat} = ${strFloat}`); 
console.log(`sebelum. jenis data type ${typeof boolean1} = ${boolean1}\n`); 

const numFromString = Number(strNumber1);
const floatFromString = Number(strFloat);
const numFromBoolean = Number(boolean1);

console.log(`setelah. jenis data type ${typeof numFromString} = ${numFromString}`); 
console.log(`setelah. jenis data type ${typeof floatFromString} = ${floatFromString}`); 
console.log(`setelah. jenis data type ${typeof numFromBoolean} = ${numFromBoolean}\n`); 

const cm = '12.5cm';
const px = '64px';

console.log(`sebelum. jenis data type ${typeof cm} = ${cm}`); 
console.log(`sebelum. jenis data type ${typeof px} = ${px}`); 

const floatFromCM = parseFloat(cm);
const intFromPX = parseInt(px);

console.log(`setelah. jenis data type ${typeof floatFromCM} = ${floatFromCM}`); 
console.log(`setelah. jenis data type ${typeof intFromPX} = ${intFromPX}`); 

// KONVERSI NUMBER DAN STRING KE BOOLEAN
console.log("\n=======KONVERSI NUMBER DAN STRING KE BOOLEAN=======");
const number1 = 123;
const string = 'IntegerMaxx';
const empty = null;
const empty2 = 0;

const boolFromNumber = Boolean(number);
const boolFromString = Boolean(string);
const boolFromNull = Boolean(empty);
const boolFromNull2 = Boolean(empty2);

console.log(boolFromNumber); // output: true
console.log(boolFromString); // output: true
console.log(boolFromNull); // output: false
console.log(boolFromNull2); // output: false

if(boolFromNull == false){
    const test = print("Hello world");
    print(test);
};

function print(args){
    console.log(args);
    return 20;
}