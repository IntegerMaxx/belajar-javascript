import result from "./BelajarExport.mjs";

result();
/*
PENJELASAN: jadi pada kodingan diatas itu kita mengimport default
function yakni "myFunction()" dengan nama yang berbeda "result()"

default function memungkinkan kita untuk mengimport function 
dengan nama apapun
*/

import { namedimport } from "./BelajarExport.mjs";
namedimport();
/*
PENJELASAN: pada kodingan diatas kita mengimport sebuah function
melalui named import. Yang dimana metode untuk mengimport ini
harus spesifik sesuai nama function yang ingin di import. Dengan
named import kita bisa mengimport lebih dari satu variabel atau
function. Contohnya ada dibawah ini
*/

import {name, email, age} from "./BelajarExport.mjs"

console.log(name);
console.log(email);
console.log(age);


import * as variable from './BelajarExport.mjs';
console.log(variable.name);
console.log(variable.email);
console.log(variable.age);
variable.namedimport();

/*
PENJELASAN: jadi dengan menggunakan "import *" kita dapat mengimport
semua function ataupun variabel pada file lain. Keyword "as" memungkinkan
kita untuk membuat variabel yang menyimpan semua hal yang dapat diimport 
dari file tersebut.
*/


import { myFunction as userFunction } from './user.mjs';
import { myFunction as customerFunction } from './customer.mjs';

userFunction();
customerFunction();

/*
PENJELASAN: Pada kodingan diatas kita menggunakan keyword "as" agar
function yang kita import memiliki nama yang berbeda. Dengan menggunakan
keyword "as" kita juga meningkatkan keterbacaan kode
*/














