var weatherData = {
    "query": {
     "count": 1,
     "created": "2018-12-06T20:52:22Z",
     "lang": "en-US",
     "results": {
      "channel": {
       "units": {
        "distance": "mi",
        "pressure": "in",
        "speed": "mph",
        "temperature": "F"
       },
       "title": "Yahoo! Weather - Nome, AK, US",
       "link": "http://us.rd.yahoo.com/dailynews/rss/weather/Country__Country/*https://weather.yahoo.com/country/state/city-2460286/",
       "description": "Yahoo! Weather for Nome, AK, US",
       "language": "en-us",
       "lastBuildDate": "Thu, 06 Dec 2018 11:52 AM AKST",
       "ttl": "60",
       "location": {
        "city": "Nome",
        "country": "United States",
        "region": " AK"
       },
       "wind": {
        "chill": "14",
        "direction": "68",
        "speed": "36"
       },
       "atmosphere": {
        "humidity": "90",
        "pressure": "989.0",
        "rising": "0",
        "visibility": "11.0"
       },
       "astronomy": {
        "sunrise": "11:38 am",
        "sunset": "4:7 pm"
       },
       "image": {
        "title": "Yahoo! Weather",
        "width": "142",
        "height": "18",
        "link": "http://weather.yahoo.com",
        "url": "http://l.yimg.com/a/i/brand/purplelogo//uh/us/news-wea.gif"
       },
       "item": {
        "title": "Conditions for Nome, AK, US at 11:00 AM AKST",
        "lat": "64.499474",
        "long": "-165.405792",
        "link": "http://us.rd.yahoo.com/dailynews/rss/weather/Country__Country/*https://weather.yahoo.com/country/state/city-2460286/",
        "pubDate": "Thu, 06 Dec 2018 11:00 AM AKST",
        "condition": {
         "code": "15",
         "date": "Thu, 06 Dec 2018 11:00 AM AKST",
         "temp": "28",
         "text": "Blowing Snow"
        },
        "forecast": [
         {
          "code": "16",
          "date": "06 Dec 2018",
          "day": "Thu",
          "high": "29",
          "low": "25",
          "text": "Snow"
         },
         {
          "code": "26",
          "date": "07 Dec 2018",
          "day": "Fri",
          "high": "27",
          "low": "22",
          "text": "Cloudy"
         },
         {
          "code": "28",
          "date": "08 Dec 2018",
          "day": "Sat",
          "high": "22",
          "low": "8",
          "text": "Mostly Cloudy"
         },
         {
          "code": "34",
          "date": "09 Dec 2018",
          "day": "Sun",
          "high": "7",
          "low": "-11",
          "text": "Mostly Sunny"
         },
         {
          "code": "28",
          "date": "10 Dec 2018",
          "day": "Mon",
          "high": "3",
          "low": "-11",
          "text": "Mostly Cloudy"
         },
         {
          "code": "28",
          "date": "11 Dec 2018",
          "day": "Tue",
          "high": "10",
          "low": "2",
          "text": "Mostly Cloudy"
         },
         {
          "code": "26",
          "date": "12 Dec 2018",
          "day": "Wed",
          "high": "9",
          "low": "5",
          "text": "Cloudy"
         },
         {
          "code": "28",
          "date": "13 Dec 2018",
          "day": "Thu",
          "high": "14",
          "low": "8",
          "text": "Mostly Cloudy"
         },
         {
          "code": "30",
          "date": "14 Dec 2018",
          "day": "Fri",
          "high": "13",
          "low": "-3",
          "text": "Partly Cloudy"
         },
         {
          "code": "30",
          "date": "15 Dec 2018",
          "day": "Sat",
          "high": "7",
          "low": "-3",
          "text": "Partly Cloudy"
         }
        ],
        "description": "<![CDATA[<img src=\"http://l.yimg.com/a/i/us/we/52/15.gif\"/>\n<BR />\n<b>Current Conditions:</b>\n<BR />Blowing Snow\n<BR />\n<BR />\n<b>Forecast:</b>\n<BR /> Thu - Snow. High: 29Low: 25\n<BR /> Fri - Cloudy. High: 27Low: 22\n<BR /> Sat - Mostly Cloudy. High: 22Low: 8\n<BR /> Sun - Mostly Sunny. High: 7Low: -11\n<BR /> Mon - Mostly Cloudy. High: 3Low: -11\n<BR />\n<BR />\n<a href=\"http://us.rd.yahoo.com/dailynews/rss/weather/Country__Country/*https://weather.yahoo.com/country/state/city-2460286/\">Full Forecast at Yahoo! Weather</a>\n<BR />\n<BR />\n<BR />\n]]>",
        "guid": {
         "isPermaLink": "false"
        }
       }
      }
     }
    }
   }


 var forecast1 = {  
     "code": "34",
     "date": "09 Dec 2018",
     "day": "Sun",
     "high": "7",
     "low": "-11",
     "text": "Mostly Sunny"
 }

 var forecast2 = {
     "code": "28",
     "date": "10 Dec 2018",
     "day": "Mon",
     "high": "3",
     "low": "-11",
     "text": "Mostly Cloudy"
 }

 var forecast3 = {
     "code": "28",
     "date": "11 Dec 2018",
     "day": "Tue",
     "high": "10",
     "low": "2",
     "text": "Mostly Cloudy"
 }

   var HTMLString = `
        <h1>${weatherData.query.results.channel.location.city} ${weatherData.query.results.channel.location.country} ${weatherData.query.results.channel.location.region}</h1>
        <h2>${weatherData.query.results.channel.item.condition.temp}${weatherData.query.results.channel.units.temperature} ${weatherData.query.results.channel.item.condition.text} </h2>
   `

   var day1Forecast = `
        <h3>${forecast1.date}</h3>
        <p>${forecast1.high}${weatherData.query.results.channel.units.temperature}</p>
        <p>${forecast1.low}${weatherData.query.results.channel.units.temperature}</p>
        <p>${forecast1.text}</p>
   `

   var day2Forecast = `
     <h3>${forecast2.date}</h3>
     <p>${forecast2.high}${weatherData.query.results.channel.units.temperature}</p>
     <p>${forecast2.low}${weatherData.query.results.channel.units.temperature}</p>
     <p>${forecast2.text}</p>
   `

   var day3Forecast = `
        <h3>${forecast3.date}</h3>
        <p>${forecast3.high}${weatherData.query.results.channel.units.temperature}</p>
        <p>${forecast3.low}${weatherData.query.results.channel.units.temperature}</p>
        <p>${forecast3.text}</p>
   `
   
   var todayContainer = document.querySelector("#current-weather");
   todayContainer.innerHTML = HTMLString;

   var forecastContainer = document.querySelector(".forecast-day");
   forecastContainer.innerHTML = day1Forecast;
   var forecastContainer2 = document.querySelector(".forecast-day2");
   forecastContainer2.innerHTML = day2Forecast;
   var forecastContainer3 = document.querySelector(".forecast-day3");
   forecastContainer3.innerHTML = day3Forecast;



if (forecast1.high <= 20 && forecast2.high <= 20 && forecast3.high <= 20) {
     document.body.style.backgroundColor = "lightblue";
}
     else if(forecast1.high >= 85 && forecast2.high >= 85 && forecast3.high >= 85) {
          document.body.style.backgroundColor = "red";
     }
     
     else {
          document.body.style.backgroundColor = "white";

     } 


if (forecast1.low <= 20) {
     forecastContainer.style.background = "darkblue";
}

if (forecast2.low <= 20) {
     forecastContainer2.style.backgroundColor = "darkblue";
}


if (forecast3.low <= 20) {
     forecastContainer3.style.backgroundColor = "darkblue";
}

if (forecast1.high >= 95) {
     forecastContainer.style.backgroundColor = "darkred";
}

if (forecast2.high >= 95) {
     forecastContainer2.style.backgroundColor = "darkred";
}

if (forecast3.high >= 95) {
     forecastContainer3.style.backgroundColor = "darkred";
}




