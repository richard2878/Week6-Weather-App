const api = {
    key: "c97af060e811713cc3d4f7e069c9f9a1",
    baseUrl: "https://api.openweathermap.org/data/2.5/",
}


const searchbox = document.querySelector('#search-city');
searchbox.addEventListener('keypress', setQuery);



function setQuery(evt) {
    if (evt.keyCode == 13) {
        getResults(searchbox.value);
        // console.log(searchbox.value)
    }

}

function getResults (query) {
    fetch(`${api.baseUrl}weather?q=${query}&units=imperial&APPID=${api.key}`)
        .then(weather => {
            return weather.json();
        }).then(displayResults); 
    fetch(`${api.baseUrl}forecast?q=${query}&units=imperial&APPID=${api.key}`)
        .then(forecast => {
            return forecast.json();
        }).then(displayForecast);      
}


function displayResults (weather) {
    console.log(weather);
    let city = document.querySelector('.location .current-city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;

    let current = new Date();
    let date = document.querySelector('.location .current-date');
    date.innerText = getCurrentStat(current)

    let description = document.querySelector('.location .current-description')
    description.innerText = `${weather.weather[0].main}`;

    let temp = document.querySelector('#current-temp');
    temp.innerHTML = `${Math.round(weather.main.temp)}&#8457;`;

    let humidity = document.querySelector('#current-humidity');
    humidity.innerHTML = `${weather.main.humidity}% Humidity`

    let windSpeed = document.querySelector('#current-windSpeed');
    windSpeed.innerHTML = `${Math.round(weather.wind.speed)} mph`
}

function displayForecast (forecast) {
    console.log(forecast);

    let date1 = document.querySelector('.card .dayWeek1')
    date1.innerText = `${forecast.list[1].dt_txt}`
    // console.log(date1)

    let temp1 = document.querySelector(`.card .temp1`)
    temp1.innerHTML = `${Math.round(forecast.list[1].main.temp)}&#8457;`;

    let condition1 = document.querySelector(`.card .condition1`)
    condition1.innerText =`${forecast.list[1].weather[0].main}`

    let humidity1 = document.querySelector('.card .humidity1')
    humidity1.innerText =`${forecast.list[1].main.humidity}%`
///////////////////////////////////////////////////////////////////////////
    let date2 = document.querySelector('.card .dayWeek2')
    date2.innerText = `${forecast.list[9].dt_txt}`
    // console.log(date2)

    let temp2 = document.querySelector(`.card .temp2`)
    temp2.innerHTML = `${Math.round(forecast.list[9].main.temp)}&#8457;`;

    let condition2 = document.querySelector(`.card .condition2`)
    condition2.innerText =`${forecast.list[9].weather[0].main}`

    let humidity2 = document.querySelector('.card .humidity2')
    humidity2.innerText =`${forecast.list[9].main.humidity}%`
//////////////////////////////////////////////////////////////////////////
    let date3 = document.querySelector('.card .dayWeek3')
    date3.innerText = `${forecast.list[17].dt_txt}`
    // console.log(date3)

    let temp3 = document.querySelector(`.card .temp3`)
    temp3.innerHTML = `${Math.round(forecast.list[17].main.temp)}&#8457;`;

    let condition3 = document.querySelector(`.card .condition3`)
    condition3.innerText =`${forecast.list[17].weather[0].main}`

    let humidity3 = document.querySelector('.card .humidity3')
    humidity3.innerText =`${forecast.list[17].main.humidity}%`
//////////////////////////////////////////////////////////////////////////
    let date4 = document.querySelector('.card .dayWeek4')
    date4.innerText = `${forecast.list[25].dt_txt}`
    // console.log(date4)

    let temp4 = document.querySelector(`.card .temp4`)
    temp4.innerHTML = `${Math.round(forecast.list[25].main.temp)}&#8457;`;

    let condition4 = document.querySelector(`.card .condition4`)
    condition4.innerText =`${forecast.list[25].weather[0].main}`

    let humidity4 = document.querySelector('.card .humidity4')
    humidity4.innerText =`${forecast.list[25].main.humidity}%`
//////////////////////////////////////////////////////////////////////////
let date5 = document.querySelector('.card .dayWeek5')
date5.innerText = `${forecast.list[25].dt_txt}`
// console.log(date4)

let temp5 = document.querySelector(`.card .temp5`)
temp5.innerHTML = `${Math.round(forecast.list[33].main.temp)}&#8457;`;

let condition5 = document.querySelector(`.card .condition5`)
condition5.innerText =`${forecast.list[33].weather[0].main}`

let humidity5 = document.querySelector('.card .humidity5')
humidity5.innerText =`${forecast.list[33].main.humidity}%`
}


function getCurrentStat (d) {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day}, ${month} ${date}, ${year}`;
}




localStorage.setItem("cities", searchbox.value)
document.getElementById("searched-cities").innerHTML = localStorage.getItem("cities");