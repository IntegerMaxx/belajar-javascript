// IF STATEMENT
const gajian = true;

justPrint('Berjalan-jalan di mall');
if(gajian){
    justPrint('Makan di restoran mall');
}
justPrint('Pulang ke rumah');


justPrint("\n");
// if else statement
const score = 90;

if(score >= 80){
    justPrint('Selamat, Anda lulus ujian!');
} else {
    justPrint('Maaf, Anda belum lulus ujian.');
}

justPrint("\n");
// if else if statement
const score2 = 85;

if(score2 > 90){
    justPrint('Selamat Anda mendapatkan nilai A!');
} else if (score2 > 80){
    justPrint('Selamat, Anda lulus ujian!');
} else {
    justPrint('Maaf, Anda belum lulus ujian.');
}

justPrint("\n");
// ternary operator
const price = 100000;
const isMember = true;
const discount = isMember ? 0.1 : 0;
justPrint(`Anda mendapatkan discount sebesar ${discount * price}`);

justPrint("\n");
// switch case
const fruit = 'hat';

switch (fruit){
    case 'banana':
        justPrint('I am a banana.');
        break;
    case 'apple':
        justPrint('I am a apple.');
        break;
    case 'strawberry':
        justPrint('I am a strawberry.');
        break;
    default:
        justPrint('I am not a fruit. I am a programmer.');    
}

    
justPrint("\n");
// kasus kapan harus menggunakan switch case
const day = new Date().getDay();
const time = new Date().getTime();
justPrint(time);

if (day === 0) {
  console.log('Minggu');
} else if (day === 1) {
  console.log('Senin');
} else if (day === 2) {
  console.log('Selasa');
} else if (day === 3) {
  console.log('Rabu');
} else if (day === 4) {
  console.log('Kamis');
} else if (day === 5) {
  console.log('Jumat');
} else if (day === 6) {
  console.log('Sabtu');
} else {
  console.log('Hari tidak valid');
}

// disini implementasi switch case agar penulisan kode lebih ringkas dan mudah untuk dibaca
switch (day) {
    case 0:
      console.log('Minggu');
      break;
    case 1:
      console.log('Senin');
      break;
    case 2:
      console.log('Selasa');
      break;
    case 3:
      console.log('Rabu');
      break;
    case 4:
      console.log('Kamis');
      break;
    case 5:
      console.log('Jumat');
      break;
    case 6:
      console.log('Sabtu');
      break;
    default:
      console.log('Hari tidak valid');
  }














function justPrint(...args){
    console.log(...args);
}