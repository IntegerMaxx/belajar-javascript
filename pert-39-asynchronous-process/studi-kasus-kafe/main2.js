import { makeCoffee, sendCoffee } from './coffee.js';

const order = 'Kopi Espresso';

console.log(`Saya memesan ${order} di kafe.`);


makeCoffee(order)
  .then((value) => {
    sendCoffee(value); // <-- tidak akan dilanjutkan ke then berikutnya.
  })
  .then((value) => {
    console.log(`Pramusaji memberikan ${value} pesanan.`);
    console.log(`Saya mendapatkan ${value} dan menghabiskannya.`);
  })
  .catch((error) => {
    console.log(error.message);
    throw error;
});

/*
PENJELASAN: jadi jika terdapat keyword return pada method "then()" pertama diatas
maka dia tidak akan dilanjutkan pada chaining method selanjutnya.

*/