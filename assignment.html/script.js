/*calling out map*/
var map = L.map('map-container');

/*setting coordinates*/
L.setView([44.97124, -93.243239], 16);

/*making sure the tiles are created*/
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png',
		{maxZoom: 18,
		}).addTo(map);
	
/*geoJSON layer*/
$.getJSON("https://dl.dropboxusercontent.com/u/8550761/wilson-library.geojson",function(data){
new L.geoJson(data).addTo(map)
  });	