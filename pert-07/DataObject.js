// OBJECT LITERALS
const user = {}; // object tanpa property 
const product = {name : 'sepatu', price : '230000', 20 : '21',}; // object dengan property 

// MENGAKSES DENGAN DOT
console.log(product.name);
console.log(product.price);
console.log(product['20']);
console.log(typeof user);

print('\n');

const user2 = {
    name : 'IntegerMaxx',
    'last name' : 'SuperPower',
    age : 22,
    test : {
        text : 'Menjadi manusia',
        hewan : {
            name: 'Kucing'
        }
    },
};

// MENGAKSES DENGAN SQUARE BRACKET
print(user2.test.hewan.name);
print(user2['test'].hewan['name']);
print(user2['test']['hewan']['name']);
print(user2['last name']);


print('\n');


// MENGAKSES DENGAN OBJECT DESTRUCTING
const userAja = {
    name : 'IntegerMaxx',
    'lastName' : 'SuperPower',
    age : 22,
    test : {
        text : 'Menjadi manusia',
        hewan : {
            name: 'Kucing'
        }
    },
};

print("DIBAWAH INI OBJECT DESTRUCTION");

const {name, lastName} = userAja;
console.log(name, lastName);

// dengan nilai default
const {age, test, isMale = false} = userAja;
console.log(age, test['hewan'].name, isMale);

function print(args){
    console.log(args);
}

print('\n');

// MENGUBAH NILAI PADA PROPERTY OBJECT
const account = {
    balance : 1000,
    debt : 10,
}

// menambah properti baru
account.name = 'Surjana';

account.balance = 2000;
print(account.balance);
print(account);

print('\n');

// MENGAHAPUS PROPERTY OBJECT
const account2 = {
    balance : 1000,
    debt : 10,
}

account2.name = 'Surjani';
print(account2.balance);
print(account2);

delete account2.balance;
print(account2);