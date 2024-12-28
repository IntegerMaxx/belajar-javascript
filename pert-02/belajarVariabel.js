const id = 123;
let username = "IntegerMaxx";

console.log(id);
console.log(username);

console.log(`\nsebelum diubah ${username}`);

username = "IntegerMaxxSuperPower";

console.log(`setelah diubah ${username}`);

// id = 333; // TypeError: Assignment to constant variable.
console.log(id); // AKAN ERROR >> TypeError: Assignment to constant variable.
/*
PENJELASAN: variabel dengan keyword const, nilai di dalamnya tidak 
bisa diubah. Karna dia const atau konstan
*/


// PENAMAAN VARIABEL SAMA PADA SCOPE YANG BERBEDA DAPAT DILAKUKAN
function printCompanyInfo() {
    const name = 'Dicoding'; // <- nama variabel sama
    const legal = 'LLC';
    
    console.log('\nCompany name:', name);
    console.log('Legal type:', legal);
  }
   
  function printEmployeeInfo() {
    const name = 'John'; // <- nama variabel sama
    const division = 'IT';
    
    console.log('Employee name:', name);
    console.log('Division:', division);
  }
   
  printCompanyInfo();
  printEmployeeInfo();

// CAKUPAN VARIABEL PADA BLOCK SCOPE
if (true) {
    let blockScopedVar = "\nI am in block scope";
    console.log(blockScopedVar); // Output: I am in block scope
    return blockScopedVar;
}

let test = blockScopedVar;
console.log(test);
/*
PENJELASAN: Tanpa adanya return pada statement if diatas variabel
test tidak akan dapat menerima nilai dari variabel "blockScopedVar"
*/

// nama variabel yang benar
const firstName = 'Fulan';
const last_name = 'Lestari';
const $message = 'Hello, World!';
const userId1 = 123;
const userId2 = 456;
 
// nama variabel yang salah
// const first-name = 'Fulan'; // tidak boleh mengandung karakter -
// const last name = 'Lestari'; // tidak boleh mengandung spasi
// const @message = 'Hello, World!'; // tidak boleh mengandung karakter @
 
// ..dan lain-lain

// nama variabel dengan angka yang benar
const _firstName = 'Fulan';
const _secondName = 'Fulana';
 
// nama variabel dengan angka yang salah karena diawali dengan angka
// const 1stName = 'Fulan';
// const 2ndName = 'Fulana';
/* 
PENJELASAN: Penamaan variabel dengan angka diperbolehkan, namun
kita harus menulisnya diakhir dari nama sebuah variabel
*/