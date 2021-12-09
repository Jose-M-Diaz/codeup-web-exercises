'use strict';

var lat = 29.5312;
var lon = -98.4683;
var search = $('#userInput').value;

$(document).ready(function() {
    //Get the forecast for 5 days
        $.get("http://api.openweathermap.org/data/2.5/onecall", {
            APPID: OPEN_WEATHER_KEY,
            lat: lat,
            lon: lon,
            units: "imperial"
        }).done(function (data) {

            for (var i = 0; i < 5; i++) {
                var location = data.daily[i].weather[0].icon;
                var icon = '<img src="http://openweathermap.org/img/w/' + location + '.png" alt="weather icon"/>'
                var card = '<div class="row">' +
                    '<div class="card text-center" style="width: 15rem;">' +
                    '<div id="card">' +
                    '<br>' +
                    '<h5>' + (new Date(data.daily[i].dt * 1000).toDateString()) + '</h5>' +
                    '<p>' + "Temp: " + (data.daily[i].temp.max) + "&degF / " + (data.daily[i].temp.min) + "&degF" + '</p>' +
                    '<img alt="">' + icon +
                    '<p>' + "Description: " + data.daily[i].weather[0].description + '</p>' +
                    '<p>' + "Humidity: " + data.daily[i].humidity + "%" + '</p>' +
                    '<p>' + "Wind: " + data.daily[i].wind_speed + '</p>' +
                    '<p>' + "Pressure: " + data.daily[i].pressure + '</p>' +
                    '</div>' +
                    '</div>' +
                    '</div>'
                //console.log(card);
                $('#container').append(card);
            }
        });
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // Map of central location San Antonio
    mapboxgl.accessToken = MAPBOX_KEY
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/dark-v10', // style URL
        center: [lon, lat], // starting position [lng, lat]
        zoom: 10 // starting zoom
    })
    // Add zoom and rotation controls to the map.
    map.addControl(new mapboxgl.NavigationControl());

    //places movable marker on central location
    var dropPin = new mapboxgl.Marker({
        color: 'green'
    }).setLngLat([lon, lat]).setDraggable(true);
    dropPin.addTo(map);

    dropPin.on('dragend', function () {
        dropPin.getLngLat();
    });
    console.log(dropPin)

    const button = document.querySelector('.btn');
    button.addEventListener('click', (e) => {
        e.preventDefault();
        geocode($('#userInput').val(), MAPBOX_KEY).then(function (results) {
            lon = results[0];
            lat = results[1];

            map.flyTo({
                center: [lon, lat],
                zoom: 10,
                essential: true // this animation is considered essential with respect to prefers-reduced-motion
            });
            console.log("The term searched for was " + search);
        });


    });

});

