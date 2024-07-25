console.log('Welcome to 🌡️ Temperature Converter');

const tempLoad = () => {
    let fa = document.getElementById('fa');
    fa.innerHTML = "&#xf2cb";
    fa.style.color = "#fdb24c";

    setTimeout(() => {
        fa.innerHTML = "&#xf2ca;";
        fa.style.color = "#fdb24c";
    }, 500)

    setTimeout(() => {
        fa.innerHTML = "&#xf2c9;";
    }, 1000)

    setTimeout(() => {
        fa.innerHTML = "&#xf2c8;";
    }, 1500)

    setTimeout(() => {
        fa.innerHTML = "&#xf769;";
        fa.style.color = "#ff0303";
    }, 2000)
    
    setInterval(() => {
        fa.style.color = "#fdb24c";
        tempLoad();
    }, 2500);
}



tempLoad();

const calculateTemp = () => {
    const numberTemp = document.getElementById('temp').value;
    // console.log(numberTemp);

    const tempSelected = document.querySelector('#temp_diff');
    const valeTemp = temp_diff.options[tempSelected.selectedIndex].value;
    // console.log(valeTemp);


    // Convert temperature from Celcius to Fahrenheit
    const celTOfah = (cel) => {
        let fahrenheit = (cel * (9 / 5) + 32);
        return fahrenheit;
    }

    // Convert temperature from Fahrenheit to Celsius
    const fahTOcel = (fehr) => {
        let celsius = ((fehr - 32) * 5 / 9);
        return celsius;
    }

    let result;
    if (valeTemp == "cel") {
        result = celTOfah(numberTemp);
        document.getElementById('resultContainer').innerHTML = `= ${result}°Fahrenheit`;
    } else {
        result = fahTOcel(numberTemp);
        document.getElementById('resultContainer').innerHTML = `= ${result}°Celsius`;
    }

    setTimeout(() => {
        window.location.reload();
    }, 5000);

}

