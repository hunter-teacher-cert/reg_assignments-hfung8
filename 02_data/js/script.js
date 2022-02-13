// Main section:
var map = L.map('mapid').setView([51.505, -0.09], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiaGFycmlzb25mdW5nOCIsImEiOiJja3psaGVrYzU1NjRsMnZuZjVic2Z0Ym4xIn0.DHEcH34FbWlHT1l6Zg9GZw'
}).addTo(map);

// Bonus Section:
//global variables
var coordinates;
var getMap;

// GetLocation gives us the map using our current coordinates
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        console.log("User blocked location")
    }
}

// return the map
function giveMap(map) {
    return map;
}

// return our latitutde and longitude in an object format
function giveLoc(lat, long) {
    return {
        latitude: lat,
        longitude: long
    };
}

// the callback function within geolocation API, this allows up to have access to the current coordinates
// by inputting the latitude and longitude into the setView and panTo methods, we can set the map to have our 
// current coordinates
function showPosition(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    console.log('latitude', latitude)
    console.log('longitude', longitude);
    document.getElementById("latitude").innerHTML = latitude;
    document.getElementById("longitude").innerHTML = longitude;
    var map = L.map('mapid').setView([latitude, longitude], 12).panTo([latitude, longitude], {
        animate: true
    });
    // var map = L.map('mapid').setView([38.89, -77.03], 13);
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 20,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiaGFycmlzb25mdW5nOCIsImEiOiJja3psaGVrYzU1NjRsMnZuZjVic2Z0Ym4xIn0.DHEcH34FbWlHT1l6Zg9GZw'
    }).addTo(map);
    // var marker = L.marker([latitude, longitude]).addTo(map);
    coordinates = giveLoc(latitude, longitude);
    getMap = giveMap(map);
}

//Bonus Bonus section:
    // On click of the button, we zoom to the section of the map that is our current location
    document.getElementById("submitBtn").addEventListener("click", function(){
    var lat = parseInt(document.getElementById("lat").value);
    var long = parseInt(document.getElementById("lng").value);
    // console.log(lat);
    // console.log(long);
    // console.log(getMap);
    var latitude = coordinates.latitude;
    var longitude = coordinates.longitude;
    console.log('latitude', latitude);
    console.log('longitude', longitude);
    getMap.flyTo([lat, long]);

    marker = new L.marker([lat, long])
        .bindPopup(latitude, longitude)
        .addTo(getMap);
    })

getLocation();

