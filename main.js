

async function getWeather() {
    const response = await fetch('http://api.openweathermap.org/data/2.5/weather?q=London&APPID=fb47c3a686e3aefa6c40797334a495df');
    const data = await response.json();
    console.log(data);
}

getWeather();