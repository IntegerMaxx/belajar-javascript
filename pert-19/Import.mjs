// import {name, favoriteFood} from "./Export.mjs";
// import {favoriteFood as food} from "./Export.mjs";
// import { sayHi } from "./Export.mjs";

// console.log(name);
// console.log(favoriteFood);
// console.log(food);
// sayHi(name);

/*
PENJELASAN: Pada kodingan diatas kita dapat melakukan dua kali mengimport
dan kita juga dapat memberikan alias pada varriabel ataupun function yang
ingin kita gunakan
*/

console.log("\n");
import * as user from './Export.mjs';

console.log(user.name);
console.log(user.favoriteFood);
user.sayHi(user.name);

/*
PENJELASAN: Karena kita sudah mengimport semua variabel dan method. kita 
sebaiknya menggunakan tanda "*" untuk mengimport semuanya pada satu file
*/




































