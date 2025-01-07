// BELAJAR SET

function justPrint(...args){
    console.log(...args);
}

// MEMBUAT SET
const mySet = new Set([3, 3, 3, 3, 1, 2, 3, 3, 3, 3 ,3 ]); 
justPrint(mySet); // Lihat hanya nilai unik yang keluar

// MENAMBAH DATA
const set = new Set();
set.add(1);
set.add('Apple');
set.add(1);
set.add('Apple');
justPrint(set);

// MENGAKSES NILAI dengan for
const set2 = new Set();
set2.add(1);
set2.add(2);
set2.add('ini test');

for (const number of set2) {
  justPrint(number); 
}

// MENGAKSES NILAI dengan foreach
const set3 = new Set();
set3.add(1);
set3.add(2);
set3.add(false);
set3.forEach((value) => justPrint(value)); 


// MENGHAPUS NILAI
const set4 = new Set();
set4.add(1);
set4.add(2);
set4.add('semangka').add('rambutan').add( 'pisang');
set4.delete(1);
set4.delete('pisang');

justPrint(set4);


