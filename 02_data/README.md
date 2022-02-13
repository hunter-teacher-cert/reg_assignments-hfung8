## 02_data 

Files included in project: 
CSS Folder
	Containing style.css
JS Folder 
	Containing script.js
Index.html

Libraries used: Leaflet JS API and Geolocation API

Objective: Create a map using Leaflet JS API

Bonus: Create a map with your location using the geolocation API and leaflet Js

Bonus Bonus: Zoom into your location from a different part
Steps: 
1.	Create a leaflet account and get an access token 
2.	Create the HTML page
3.	Create the CSS page
4.	Create the JS page
5.	In your HTML page create a div with an id of map. Include the script tags and the styling from the JS and CSS pages. Make sure to follow the documentation on the website and be aware of where to include the script and style tags for Leaflet content. 
6.	In your CSS page include the height of the div using pixels
7.	In your JS page include the following code:
```var map = L.map(‘map’).setView([38.89, -77.03], 13)```

This will initialize the map for you and set the location of the map to Washington automatically once the page loads. 
Include the following code: 
`` L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data &copy; <ahref="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  	  maxZoom: 18,
    	  id: 'mapbox/streets-v11',
 	  tileSize: 512,
  	  zoomOffset: -1,
accessToken: 'pk.eyJ1IjoiaGFycmlzb25mdW5nOCIsImEiOiJja3psaGVrYzU1NjRsMnZuZjVic2Z0Ym4xIn0DHEcH34FbWlHT1l6Zg9GZw'
}).addTo(map); ``

This code will tell the leaflet API to give you the tiles to create a map. The access token is your own personal token. For the moment you cannot protect it from being public. 

Congratulations you’ve made a map using Leaflet. 

Bonus: Try to grab your own coordinates and using the documentation in Leaflet go to your current location. 

Steps:
1.	Create a getLocation function that will return your current latitude and longitude. 
2.	Create this function using the Geolocation API. 
3.	Using the variables from the Geolocation API, write code that will center in on your location. 
4.	Hint: use the panTo method. 

Bonus Bonus: Try to grab the section of the map that zooms into your current location

Steps:
1.	Create a button with an event listener that fires a callback function 
2.	Once the event is registered, grab the coordinates from the geolocation api 
3.	Input the coordinates into your map using the flyTo method with your map. 
4.	Create a new marker with the marker method to show the current location. 
