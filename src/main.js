const form = document.querySelector('#search-form');

form.addEventListener("submit", saveSearchValue);


function saveSearchValue(e) {
    e.preventDefault();
    const searchbar = document.querySelector('.searchbar'); 
    return searchbar.value;
}

async function getWeather() {
    const response = await fetch('http://api.openweathermap.org/data/2.5/weather?q=Seattle&APPID=fb47c3a686e3aefa6c40797334a495df');
    const data = await response.json();
    // console.log(data);
}

getWeather();

/*Used to get location name and etc information*/
async function getLocation() {
    const response = await fetch('http://api.openweathermap.org/geo/1.0/direct?q=Guangzhou&appid=fb47c3a686e3aefa6c40797334a495df');
    const data = await response.json();
    console.log(data);
}

//Functions will check if country is inside US. If inside US, will use
//name of city and state.
//If not in US, will use name of city and Country. 

getLocation();