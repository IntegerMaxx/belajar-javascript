function addOne(x) {
    return x + 1;
}
  
function square(x) {
    return x * x;
}
  
function compose(f, g) {
  return (x) => {
    return f(g(x));
  }
}

const addOneAndSquare = compose(square, addOne);
  
console.log(addOneAndSquare(2));

/*
PENJELASAN: jadi maksud dari "return (x) => {}" pada kodingan diatas
adalah arrow function yang menerima parameter "x". Jadi function
"compose()" akan mengembaikan arrow function sekaligus parameternya,
karna function "compose()" disimpan pada variabel "addOneAndSquare"
maka otomatis variabel tersebut menjadi nama dari arrow function
dan menerima parameter "(x)".

Sebenarnya saat kita mengisi nilai 2 pada function "addOneAndSquare(2)"
itu akan mengisi parameter "(x)", kemudian dia akan mengembalikan function
"square()" >> karna kita mengisi parameter pertama pada function "compose"
dengan function "square", kemudian function "square" menerima parameter "x"
yang dimana "x" adalah function "addOne", pada function "addOne" dia akan 
mengembalikan number yang ditambahkan dengan satu. Sementara function "addOne"
pada function compose itu menerima parameter "x" yang dimana "x" adalah 2
sehingga nilai kembaliannya adalah 3, karna masih ditampung oleh function
"square()" maka nilai 3 tadi pada parameternya, maka function "square()"
akan mengembalikan nilai x yang dikali dengan dirinya x >> artinya 3 * 3,
sehingga itulah yang menjadi hasil dari kembalian semua function yakni 9.
*/
























