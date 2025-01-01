function multiply(a,b){
    return a * b;
}

function calculate(operation, numA, numB){ // function utama
    return operation(numA, numB); // disini dia diubah menjadi function
}

const result = calculate(multiply, 2, 4);
console.log(result);

/*
PENJELASAN: Jadi maksud dari operation pada parameter function calculate
adalah parameter yang bisa menerima nilai function, kenapa?? karna di dalam
function calculate kita mendefinisikan operation pada parameter tadi sebagai
sebuah function

nilai yang diambil dari argumen calculate '2, 4' akan diteruskan kepada 
function operation yang dimana function operation ini telah menjadi function
multiply.

intinya parameter operation akan bernilai function dari muliply
*/

function multiplier(x) {
    return function (num) { // ini namanya function anonim/tidak bernama
      return x * num;
    };
  }
  
  const double = multiplier(2);
  const triple = multiplier(3);
  
  console.log(double(10));
  console.log(triple(11));


/*
PENJELASAN: Pada kodingan diatas saat kita membuat variabel "double"
dan "triple", sebenarnya di dalam variabel tersebut sudah terdapat
sebuah function, yang dimana function ini yang dikembalikan
oleh function multiplier, function yang dikembalikan adalah function
yang tidak memiliki identifier, Jadi saat dia disimpan pada sebuah
variabel maka variabel tersebut yang menjadi identifier. Saat kita
mengisinya dengan nilai, maka nilai sebelumnya yakni nilai x, kemudian
akan dikalikan dengan nilai yang berada pada function tidak memiliki
identifier. function yang tidak memiliki identifier ini memiliki akses
terhadap nilai x, sehingga perkalian dapat dilakukan
*/
  