'use strict';


$(document).ready(function(){
    mapboxgl.accessToken = MAPBOX_KEY
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/dark-v10', // style URL
        center: [-98.4683, 29.5312], // starting position [lng, lat]
        zoom: 10 // starting zoom
    });

//draggable marker
    var marker = new mapboxgl.Marker({
        draggable: true,
        color: 'green'
    })
        .setLngLat([-98.4916, 29.4252])
        .addTo(map);

        $.get("http://api.openweathermap.org/data/2.5/onecall", {
            APPID: OPEN_WEATHER_KEY,
            lat: 29.5312,
            lon: -98.4683,
            units: "imperial"
        }).done(function (data) {
            //console.log('5 day forecast', data);
            console.log(data);
            date.innerHTML = (new Date(data.daily[0].dt*1000).toDateString());
            temp.innerHTML = ("Temp: " + data.daily[0].temp.max) + "&degF / " + (data.daily[0].temp.min) + "&degF";
             $('#icon').attr('src', "http://openweathermap.org/img/w/" + data.daily[0].weather[0].icon + '.png');
            console.log('src', "http://openweathermap.org/img/w/" + data.daily[0].weather[0].icon + ".png");
            description.innerHTML = ("Description: " + data.daily[0].weather[0].description);
            humidity.innerHTML = ("Humidity: " + data.daily[0].humidity + "%");
            wind.innerHTML = ("Wind: " + data.daily[0].wind_speed)
            pressure.innerHTML = ("Pressure: " + data.daily[0].pressure)





        });








});

//for