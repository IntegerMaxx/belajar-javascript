// PENANGANAN ERROR WITH CALLBACK

import { makeCofee, sendCoffee } from "./coffee.js";

const order = 'Kopi Espresso';

console.log(`Saya memesan ${order} di kafe`);

makeCofee(order, (makeCofeeError, makeCofeeData) => {
    if(makeCofeeError){
        // Do something with error
        console.log(makeCofeeError);
        return;
    }

    sendCoffee(makeCofeeData, (sendCoffeeError, sendCoffeeData) => {
        if (sendCoffeeError) {
            // Do something with error
            console.error(sendCoffeeError);
            return;
        }
      
        console.log(`Pramusaji memberikan ${sendCoffeeData} pesanan.`);
        console.log(`Saya mendapatkan ${sendCoffeeData} dan menghabiskannya.`);
    });
});




