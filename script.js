const apiKey = '9X5YMXR45ZDWNTP235UBM4P64';
const contentDiv = document.querySelector('#content-div');

//onclick of submit button needs to clear weather rows

async function getWeather (location) {
    const response = await fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/' + location +"?key=" + apiKey);


    if (!response.ok) {
        setLocation("Invalid Location");
    }
    else {
        processJson(await response.json());
    }
    
    
}

function setLocation (location) {
    const locationDiv = document.querySelector('#weather-location');
    locationDiv.innerHTML = location;
}

function makeWeatherRow(day) {
    const weatherRow = document.createElement('div');
    weatherRow.className = "weather-wrapper";

    const dateDiv = document.createElement('div');
    dateDiv.className = "weather-date";
    dateDiv.innerHTML = day.datetime;
    weatherRow.appendChild(dateDiv);

    const lowDiv = document.createElement('div');
    lowDiv.className = "weather-low";
    lowDiv.innerHTML = "Low: " + day.tempmin;
    weatherRow.appendChild(lowDiv)

    const highDiv = document.createElement('div');
    highDiv.className = "weather-high";
    highDiv.innerHTML = "High: " + day.tempmax;
    weatherRow.appendChild(highDiv)

    const currDiv = document.createElement('div');
    currDiv.className = "weather-curr";
    currDiv.innerHTML = "Current: " + day.temp;
    weatherRow.appendChild(currDiv);

    return weatherRow;
}

function generateWeatherRows(days) {
    for(let i = 0; i < days.length; i++) {
        const weatherRow = makeWeatherRow(days[i]);
        contentDiv.appendChild(weatherRow);
    }
}

function processJson (weatherJSON) {
    console.log(weatherJSON);

    setLocation(weatherJSON.address);

    generateWeatherRows(weatherJSON.days);
}

getWeather("london");