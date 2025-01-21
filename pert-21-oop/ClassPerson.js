class Person{

    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    eat(){
        console.log(`${this.name} is eating`);
    }

}

/*
PENJELASAN: pada kodingan diatas, untuk membuat sebuah constructor 
kita harus menggunakan keyword "constructor" dan memberikannya
sebuah parameter. Untuk membuat function kita cukup menuliskan
nama functionnya, tidak perlu menuliskan keyword "function"
seperti contoh kodingan diatas.

*/


const person1 = new Person("Max", 21);
const person2 = new Person("Min", 20);

console.log(person1.name);
console.log(person2.name);

person1.eat();
person2.eat();

console.log(typeof Person);

/*
PENJELASAN: sintaks "class" di JavaScript hanya menjadi cara alternatif
untuk mendefinisikan constructor function. Untuk membuktikannya "typeof Person"
diatas akan mengecek apakah "Person" adalah class atau sebauh function.

Hasilnya "Person" adalah sebuah function. Jadi mau menggunakan "class" atapun
"constructor function" javaScript tetap akan menganggapnya sebagai function


*/




























