let request = require('request');

let url = `https://api.darksky.net/forecast/0f117a9db5a9407fd73d76e7555804b1/37.8267,-122.4233`;

request({url:url, json:true}, function(err, response){
    if(err){
        console.log("No network available");
    }
    else{
        console.log(response.body.daily.data[0].summary + " It is currently ") + 
        response.body.currently.temperature + " degrees out. There is a " +  
        response.body.currently.temperature + " % chance of rain "
    }
})
