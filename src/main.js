//testing purposes
// https://api.openweathermap.org/data/2.5/weather?q=london&units=imperial&APPID=fb47c3a686e3aefa6c40797334a495df
let weather = {
    apiKey: "fb47c3a686e3aefa6c40797334a495df",
    getWeather: function(city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q="
            + city
            + "&units=imperial"
            + "&APPID="
            + this.apiKey
        )
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            this.displayWeather(data);
            this.conversion = 'imperial';
        });
    },

    getForecast: async function(city) {
        const response = await fetch()
    },
    //next function is to display to ui
    displayWeather: function(data) {
        const {name} = data;
        const {temp, feels_like, humidity} = data.main;
        const {icon, main} = data.weather[0];
        const {speed} = data.wind;

        document.querySelector('.location-header').textContent = name;
        document.querySelector('.temp-number').textContent = Math.round(temp);
        document.querySelector('.feels-like-number').textContent = Math.round(feels_like);
        document.querySelector('.weather-icon').src = `https://openweathermap.org/img/wn/${icon}@2x.png`
        document.querySelector('.sky-description').textContent = main;
        document.querySelector('.humidity-value').textContent = humidity;
        document.querySelector('.wind-number').textContent = speed;
        console.log(main);
    },

    displayForecast: function(data) {

    },

    search: function() {
        this.getWeather(document.querySelector('#searchbar').value);
    },
    // changeImg: function() {
    //     const imageUrl = "url('https://picsum.photos/800')";
    //     const body = document.querySelector('body');
    //     // document.body.style.backgroundImage = none;
    //     document.body.style.backgroundImage = imageUrl;
    // },
    conversion: 'imperial',
}

//To do: 
//Change between farenheit and celsius
//Change photo based on search query
//Add info to bottom cards

const form = document.querySelector('#search-form');

form.addEventListener("submit", function(e) {
    e.preventDefault();
    weather.search();
    // weather.changeImg();
}); 

const switchButton = document.querySelector('.temp-switch');
switchButton.addEventListener("click", function(e){
   
})

//Initial function call to set real-time data
weather.getWeather('Los Angeles');