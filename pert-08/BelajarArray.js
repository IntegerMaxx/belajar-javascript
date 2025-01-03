console.log('\n');

const array = [1,2];
console.log(typeof array);

console.log('\n');

// MEMBUAT ARRAY DENGAN OBJECT CONSTRUCTOR
const user = new Array();
const numbers = new Array(5);
console.log(user);
console.log(numbers);

console.log('\n');

// MEMBUAT ARRAY DENGAN SINTAKS Array.from
const foo = Array.from('foo');
console.log(foo);

console.log('\n');

// MEMBUAT ARRAY DENGAN OBJECT LITERAL
const fruits = ['apple', 'banana', 'cherry', '', 'grape'];
console.log(fruits);

console.log('\n');

// MENGAKSES ELEMENT ARRAY
const myArray = [42, 55, 30];
console.log(myArray[1]);

console.log('\n');


// MANIPULASI NILAI ARRAY DENGAN INDEXING
const myArray2 = [1, 2, 3, 4, 5];
myArray2[1] = 10;
console.log(myArray2);

console.log('\n');

// MANIPULASI NILAI ARRAY DENGAN PUSH
myArray2.push('Surjani', 2);
console.log(myArray2);

console.log('\n');

// MENGHAPUS ELEMENT ARRAY
delete myArray2[5];
console.log(myArray2);

console.log('\n');

// MENGHAPUS DATA DAN ELEMENT ARRAY
const myArray3 = ['hewan', 12, 3, 5.9, true, 'tumbuhan',undefined ,'manusia'];
console.log(myArray3);
myArray3.splice(6,2);
console.log(myArray3);

console.log('\n');

// ARRAY DESTRUCTING
const introduction = ['Hello', 'Sunarto', undefined];
const [greeting, name1] = introduction;
console.log(name1);

console.log('\n');

// ARRAY METHOD
//  reverse
const myArray4 = ['Android', 'Data Science', 'Web', 'Hello World', 'Manusia'];
myArray4.reverse(); // membalikkan array, yang terakhir jadi pertama dan pertama jadi terakhir
console.log(myArray4);
myArray4.sort(); // Mengurutkan sesuai abjad, huruf awalan kata. Tidak bekerja dengan optimal pada tipe data numerik
console.log(myArray4);





