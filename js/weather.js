'use strict';



$(document).ready(function() {
    var lat;
    var lon;
    //Get the forecast for 5 days using coordinates of variables lon and lat
    let getWeather = () => {
        lat = 29.5312;
        lon = -98.4683;
        $.get("http://api.openweathermap.org/data/2.5/onecall", {
            APPID: OPEN_WEATHER_KEY,
            lat: lat,
            lon: lon,
            units: "imperial"
        }).done(function (data) {

            for (var i = 0; i < 5; i++) {
                var card = "";
                var location = data.daily[i].weather[0].icon;
                var icon = '<img src="http://openweathermap.org/img/w/' + location + '.png" alt="weather icon"/>'
                card = '<div class="row">' +
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
        console.log('call function weather')
    }
    getWeather();
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // Map of central location  being at San Antonio
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
        var setMarker = new mapboxgl.Marker({
            color: 'green'
        }).setLngLat([lon, lat]).setDraggable(true).addTo(map);

        setMarker.on('dragend', function () {
            console.log(setMarker.getLngLat())
            setMarker.getLngLat();
        });
        console.log(setMarker)



    //when button is clicked, moved map to new location and places a new pin, but can't get it to update weather
    var search;
    var lon2;
    var lat2;
    const button = document.querySelector('.btn');
    button.addEventListener('click', (e) => {
        search = $('#userInput').val();
        e.preventDefault();
        geocode(search, MAPBOX_KEY).then(function (results) {
            console.log(results);
           lon2 = results[0];
           lat2 = results[1];
            console.log(lon2) //console logs to make sure correct coordinates were coming through when searching
            console.log(lat2)
        }).then(function (){
            var newMarker = new mapboxgl.Marker({
                color: 'blue',
            }).setLngLat([lon2, lat2]).setDraggable(true).addTo(map);

            newMarker.on('dragend', function () {
                console.log(newMarker.getLngLat()) //console log to verify coords were changing with movement of drag marker
                newMarker.getLngLat();
            });

            map.flyTo({
                center: [lon2, lat2],
                essential: true // this animation is considered essential with respect to prefers-reduced-motion
            });
        });
        //console log to verify that the value of input was being read
        console.log("The term searched for was " + search);

        });






//end of document ready function
});

