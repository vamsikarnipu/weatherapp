const apikey = "ab46157fc8c3fdeb540af5f2465f21c6";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const search = document.querySelector('.search input');
const searchbtn = document.querySelector('.search button');

async function checkwhether(city) {
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    if(response.status==404)
    {
        document.querySelector('.error').style.display='block';
        document.querySelector('.weather').style.display="none";

    }
    else
    {
        const data = await response.json();
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
    document.querySelector('.wind').innerHTML = data.wind.speed + " km/hr";
    if (data.weather[0].main == 'Clouds') {
        const weathericon = document.querySelector('.weather-icon');
        weathericon.src = './clouds.png';
    } else if (data.weather[0].main == 'Clear') {
        const weathericon = document.querySelector('.weather-icon');
       weathericon.src = './clear.png';
    } else if (data.weather[0].main == 'Rain') {
        const weathericon = document.querySelector('.weather-icon');
        weathericon.src = './rain.png';
    } else if (data.weather[0].main == 'Dizzele') {
        const weathericon = document.querySelector('.weather-icon');
        weathericon.src = './dizzele.png';
    } 
    else if (data.weather[0].main == 'Mist') {
        const weathericon = document.querySelector('.weather-icon');
        weathericon.src = './mist.png';
    }
    document.querySelector('.weather').style.display="block"
    document.querySelector('.error').style.display='none';
    }
}



function updateWeather() {
    checkwhether(search.value);
}

searchbtn.addEventListener('click', updateWeather);

search.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        updateWeather();
    }
});
