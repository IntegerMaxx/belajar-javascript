function convertCelsiusToFahrenheit(temperature){

    if(temperature !== undefined || NaN){ // <-- Conditional statement (perintah kondisional)
        const temperatureInFahrenheit = 9 / 5 * temperature + 32;

        console.log('Hasil konversi', temperatureInFahrenheit);
    }
}

convertCelsiusToFahrenheit();

// function dengan nilai default
function convertCelsiusToFahrenheit2(temperature = 50){ // ini nilai default
    const temperatureInFahrenheit = 9 / 5 * temperature + 32;

    console.log('Hasil konversi', temperatureInFahrenheit);
    
}
convertCelsiusToFahrenheit2(); // >> dengan nilai default
convertCelsiusToFahrenheit2(3); // dengan nilai input by user
