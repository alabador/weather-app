
let weather = {
    apiKey: "fb47c3a686e3aefa6c40797334a495df",
    getWeather: function(city) {
        fetch("http://api.openweathermap.org/data/2.5/weather?q="
            + city
            + "&units=imperial"
            + "&APPID="
            + this.apiKey
        )
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            this.displayWeather(data);
        });
    },
    //next function is to display to ui
    displayWeather: function(data) {
        const {name} = data;
        const {temp, feels_like} = data.main;
        const {icon, main} = data.weather[0];

        document.querySelector('.location-header').textContent = name;
        document.querySelector('.temp-number').textContent = Math.round(temp);
        document.querySelector('.feels-like-number').textContent = Math.round(feels_like);
        document.querySelector('.weather-icon').src = `http://openweathermap.org/img/wn/${icon}@2x.png`
        document.querySelector('.sky-description').textContent = main;
        console.log(main);
    },
    search: function() {
        this.getWeather(document.querySelector('.searchbar').value);
    }
}

//To do: 
//Change between farenheit and celsius
//Change photo based on search query
//Add info to bottom cards

const form = document.querySelector('#search-form');

form.addEventListener("submit", function(e) {
    e.preventDefault();
    weather.search();
}); 

//Functions will check if country is inside US. If inside US, will use
//name of city and state.
//If not in US, will use name of city and Country. 