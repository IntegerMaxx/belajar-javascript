import {makeCoffee, sendoffee} from "./Coffee2.js";

console.log('Saya memesan kopi di Kafe.');

makeCoffee(() => {
    sendoffee(() => {
        console.log('Pramusaji memberikan kopi pesanan.');
        console.log('Saya mendapatkan kopi dan menghabiskannya');
    });
});



























