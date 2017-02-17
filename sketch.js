function setup() {
	//remove the canvas as we are working on the leaflet layer
	noCanvas(); 
	
	//initialize mapbox - using light theme for the instance
	mapboxgl.accessToken = 'pk.eyJ1IjoiYmFubWVkbyIsImEiOiJhSklqeEZzIn0.rzfSxO3cVUhghA2sJN378A';
	var map_box = new mapboxgl.Map({
		container: 'map_box',
		style: 'mapbox://styles/mapbox/light-v9'
	});
	
}

function draw() {
	
}