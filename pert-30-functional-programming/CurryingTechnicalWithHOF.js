function adjectivfy(adjective) {
  return function (noun) {
    return `${noun} ${adjective}.`;
  }
}
  
function multipleBy(x) {
  return function(y) {
    return x * y;
  }
}
  
const coolifier = adjectivfy('keren');
const funnifier = adjectivfy('seru');
  
const multipleByFive = multipleBy(5);
  
console.log(coolifier('IntegerMaxx')); // Output: Dicoding keren.
console.log(funnifier('JavaScript')); // Output: JavaScript seru.
console.log(multipleByFive(7)); // Output: 35
console.log(multipleByFive(10)); // Output: 50

/*
PENJELASAN: jadi variabel "coolifier" diatas otomatis menjadi function
kerena dia menerima function yang mengembalikan function. Jadi saat 
"coolifer()" diisi nilai dari argumennya, sebenarnya yang terjadi adalah
kita mengisi function yang sedang dikembalikan oleh "adjectivfy()"
function.
*/













