function Person(name, age){
    this.name = name;
    this.age = age;
}

Person.prototype.eat = function() {
    console.log(`${this.name} is eating`);
}

var maxx = new Person('Maxx', 21);
maxx.eat();
console.log(maxx.age);

/*
PENJELASAN: jadi pada kodingan diatas ini, kita telah berhasil
membuat object dari "constructor function". Sebenarnya JavaScript
bukan bahasa pemrograman berbasis class namun berbasis prototype

Semua object di JavaScript memiliki properti tersembunyi bernama
[[Prototype]] yang mengarah ke object prototype lain atau null

kalau di JavaScript kita dapat membuat object dari sebuah function
dan itu merupakan kemampuan function pada JavaScript. Namun function
untuk membuat object ini seperti sebuah constructor untuk membuat 
object, namnaya adalah "constructor function".

Untuk membuat object kita tidak dapat menggunakan arrow function
namun harus menggunakan keyword "new"
*/




































