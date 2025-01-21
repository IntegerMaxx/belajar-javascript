// ENCAPSULASI

class CoffeeMachine{
    #temperature = 90;

    constructor(waterAmount){
        this.waterAmount = waterAmount;
        this.#temperature = this.#defaultTemperature();
    }

    setTemperature(temperature){
        this.#temperature = temperature;
    }

    getTemperature(){
        return this.#temperature;
    }

    #defaultTemperature(){
        return 90;
    }
}

const coffee = new CoffeeMachine(100);
// coffee.temperature = 60; Masalah
console.log('Sebelum diubah: ', coffee.getTemperature());
coffee.setTemperature(20);
console.log('Setelah diubah: ', coffee.getTemperature());













/*
PENJELASAN: penggunaan tanda hashtag "# "pada properties dan method JavaScript
akan menjadikannya sebagai private, yang artinya properties dan method hanya
dapat diakses dari dalam class.
*/


























