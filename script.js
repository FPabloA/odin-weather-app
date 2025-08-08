const apiKey = '9X5YMXR45ZDWNTP235UBM4P64';

async function getWeather (location) {
    const response = await fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/' + location +"?key=" + apiKey);
    console.log(response.json());
}

//getWeather("london");