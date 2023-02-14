//testing purposes
// https://api.openweathermap.org/data/2.5/weather?q=london&units=imperial&APPID=fb47c3a686e3aefa6c40797334a495df
let weather = {
    apiKey: "fb47c3a686e3aefa6c40797334a495df",
    getWeather: async function(city) {
        const res = await fetch("https://api.openweathermap.org/data/2.5/weather?q="
            + city
            + "&units=imperial"
            + "&APPID="
            + this.apiKey
        );
        const jsonRes = await res.json()
        this.displayWeather(jsonRes);
        this.conversion = 'imperial';
    },

    getForecast: async function(city) {
        const res = await fetch("https://api.openweathermap.org/data/2.5/forecast?q="
            + city
            + "&units=imperial"
            + "&APPID="
            + this.apiKey
        );
        const jsonRes = await res.json()
        this.displayForecast(jsonRes);
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
        // document.querySelector('.weather-icon').src = `https://openweathermap.org/img/wn/${icon}@2x.png`
        document.querySelector('.sky-description').textContent = main;
        document.querySelector('.humidity-value').textContent = humidity;
        document.querySelector('.wind-number').textContent = speed;
        console.log(main);
    },

    displayForecast: function(data) {
        const dates = document.querySelectorAll('.current-date');
        const temps = document.querySelectorAll('.temp-today');
        const conditions = document.querySelectorAll('.weather-condition');
        const minTemps = document.querySelectorAll('.min-temp');
        const maxTemps = document.querySelectorAll('.max-temp');

        const fiveDayForecast = this.findUniqueDates(data);

        for(let i = 0; i < fiveDayForecast.length; i++){
            const currentData = fiveDayForecast[i];
            const {dt_txt:date} = currentData;
            const {temp, temp_min, temp_max} = currentData.main;
            const {description} = currentData.weather[0];
            // const currentData = data.list[i];
            // const {dt_txt:date} = currentData;
            // const {temp, temp_min, temp_max} = currentData.main;
            // const {description} = currentData.weather[0];
            const formattedDate = date.split(' ')[0];

            //Array destructuring - get data from json and put into html
            [dates[i].textContent, 
            temps[i].textContent, 
            conditions[i].textContent, 
            minTemps[i].textContent, 
            maxTemps[i].textContent] = [formattedDate, Math.round(temp), description, Math.round(temp_min), Math.round(temp_max)];
        }
    },

    //Get only unique dates from json data, to feed into displayForecast. 
    //Compares strings from dates property to see if dates are unique.
    //Gets first available time of the date.
    findUniqueDates: function(data) {
        const dataList = data.list;
        const firstDate = dataList[0].dt_txt.split(' ')[0];
        
        const uniqueDates =  [dataList[0]];
        const uniqueDateStrings = [firstDate];

        for(let i = 0; i<dataList.length; i++){
            const testDate = dataList[i].dt_txt.split(' ')[0]
            if (!uniqueDateStrings.includes(testDate)){
                uniqueDates.push(dataList[i]);
                uniqueDateStrings.push(testDate);
            }
        }
        return uniqueDates;
    },

    search: function() {
        // this.getWeather(document.querySelector('#searchbar').value);
        this.getWeather(document.querySelector('#searchbar').value);
        this.getForecast(document.querySelector('#searchbar').value);
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