let request = require('request');

let apikey = 'c5f14bff5b4d870fe2fab666244e9648';

const CITIES = ['Delhi', 'Allahabad', 'Bangalore', 'Kolkata'];

const city = CITIES[Math.floor(Math.random()*CITIES.length)];

let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apikey}`;

request(url, function(err, response, body){
    console.log("fetching data");
    if(err){
        console.log("error while fetching data");
    }
    else{
        let weather = JSON.parse(body);
        let message = `It's ${weather.main.temp} degree is ${weather.name}!`;
        console.log(message);
    }
})
