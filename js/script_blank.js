//js and leaflet stuff	

//initialize the map
//L.map stands for Leaflet map
var map = L.map('map').setView([34, 65], 6);
	
//load tile layer
// Mapbox basemap added here
var basemap1 = L.tileLayer('https://{s}.tiles.mapbox.com/v3/landplanner.map-4y9ngu48/{z}/{x}/{y}.png', {
    minZoom: 6
});
basemap1.addTo(map);

var basemap2 = L.tileLayer('https://{s}.tiles.mapbox.com/v3/landplanner.map-b31zy3ud/{z}/{x}/{y}.png', {
    minZoom: 6
});
basemap2.addTo(map);

//icon photo-camera
//Icons made by http://www.flaticon.com/authors/freepik Creative Commons BY 3.0"
//create a Leaflet icon variable
var strike = new
    L.icon({
    iconUrl: 'images/target.png',
    });

// Leaflet market cluster
        var markers = L.markerClusterGroup();
        

//add some GeoJSON
var geoJsonLayer = L.geoJson(strikes, {
    onEachFeature: function (feature, layer) {
        layer.bindPopup("<h3 class='infoheader'>Report</h3><p class='infoheader'>" 
        + "<b>District: </b>" + feature.properties.District + "<br>" + "<b>Province: </b>"  + feature.properties.Province + "<br>"
        + "<b>Date: </b>" + feature.properties.Date + "<br>" + "<b>Date: </b>" + feature.properties + "<br>"
        + "<b>Target: </b>" + feature.properties.rtarget + "<br>" + "<b>Estimated killed: </b>" + feature.properties.maximumk + "<br>"
        + "<b>Estimated Civilian Casualties: </b>" + feature.properties.maximumc + "</p>"
        );
        
        
        layer.setIcon(strike);},
pointTolayer: function(feature, latlng) {
    return L.marker(latlng);}

});
    markers.addLayer(geoJsonLayer);
    map.addLayer(markers);
    map.fitBounds(markers.getBounds());