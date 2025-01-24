class Character {
    constructor(name, health, position) {
      this.name = name;
      this.health = health;
      this.position = position;
    }
   
    canMove() {
      console.log(`${this.name} moves to another position!`);
    }
}
   
function canAttack(character) {
    return {
      attack: () => {
        console.log(`${character.name} attacks with a weapon!`);
      }
    };
}
   
function canDefend(character) {
    return {
      defend: () => {
        console.log(`${character.name} defends with a shield!`);
      }
    };
 }
   
function canCastSpell(character) {
    return {
      castSpell: () => {
        console.log(`${character.name} casts a spell!`);
      },
      potion: () => {
        console.log(`${character.name} gets position to increase health`);
      }
    };
}

console.log(typeof canCastSpell());

/*
PENJELASAN: pada kodingan diatas, kita membuat object compositon, yang dimana dia mengembalikan
map, yang terdapat key dan value-nya sebagai sebuah arrow function.

Object composition adalah sebuah pola desain (design pattern) di mana objek dibangun dengan
cara menggabungkan/mengkomposisi fungsi-fungsi atau objek lain, daripada menggunakan pewarisan
(inheritance). Tujuannya adalah untuk membuat objek yang fleksibel, dapat digunakan ulang, dan
mudah untuk diperluas tanpa membuat hierarki class yang kompleks.

yang dimana pendekatan yang dilakukan adalah berbasis kemampuan bukan berbasis peran atau identitas




*/
function helloWorld(){
    return {
        hello: () => {
            console.log("Hello World!");
        }
    }
}
   
function createMonster(name) {
    const character = new Character(name, 100, 0);
    return Object.assign(character, canAttack(character));
}
   
function createGuardian(name) {
    const character = new Character(name, 100, 0);
    return Object.assign(character, canDefend(character));
}
   
function createWizard(name) {
    const character = new Character(name, 100, 0);
    return Object.assign(character, canCastSpell(character));
}
   
function createWarrior(name) {
    const character = new Character(name, 100, 0);
    return Object.assign(character, canAttack(character), canDefend(character), helloWorld()); // ini penggabungan atau object composition
}
const monster = createMonster('Monster');
monster.canMove();
monster.attack();
console.log("\n");

const guardian = createGuardian('Guardian');
guardian.canMove();
guardian.defend();
console.log("\n");

const wizard = createWizard('Wizard');
wizard.canMove();
wizard.castSpell();
wizard.potion();
console.log("\n");

const warrior = createWarrior('Warrior');
warrior.canMove();
warrior.attack();
warrior.defend();
warrior.hello();
console.log("\n");

/*
PENJELASAN: maksud dari kodingan ini "return Object.assign(character, canCastSpell(character));"
adalah dia akan mengembalikan object baru, menyalin semua properties, menggabungkan dengan function
baru

Object composition adalah sebuah pola desain (design pattern) di mana objek dibangun dengan
cara menggabungkan/mengkomposisi fungsi-fungsi atau objek lain, daripada menggunakan pewarisan
(inheritance). Tujuannya adalah untuk membuat objek yang fleksibel, dapat digunakan ulang, dan
mudah untuk diperluas tanpa membuat hierarki class yang kompleks.

*/
















