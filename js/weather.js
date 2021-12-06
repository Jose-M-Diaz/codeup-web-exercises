'use strict';


$(document).ready(function(){
    mapboxgl.accessToken = MAPBOX_KEY
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/dark-v10', // style URL
        center: [-98.4683, 29.5312], // starting position [lng, lat]
        zoom: 10 // starting zoom
    });
    // Add zoom and rotation controls to the map.
    map.addControl(new mapboxgl.NavigationControl());

//draggable marker
    var marker = new mapboxgl.Marker({
        draggable: true,
        color: 'green'
    }).setLngLat([-98.4916, 29.4252]).addTo(map);

    marker.on('dragend', function() {
        console.log(marker.getLngLat());
    })

        $.get("http://api.openweathermap.org/data/2.5/onecall", {
            APPID: OPEN_WEATHER_KEY,
            lat: 29.5312,
            lon: -98.4683,
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


            //use of the search button
            var btn = document.querySelector('.btn')
            btn.addEventListener('click', function (e) {
                e.preventDefault();
                var search = document.querySelector('#userInput').value;
            });


        });


});

//for