//Initialize Map
var map = L.map('map', {
    crs: L.CRS.Simple,
    minZoom: -2,
    maxZoom: 2
});

//Define Image Size

var imgWidth = 5000, imgHeight = 5000;
var imageUrl = 'https://github.com/TodayTooth1/Arcadia-Season3-Map/blob/ff5b1bbba1be3e219c6a0f147ce074a2979577c4/.idea/arcadia_season3_world_map.png';
var imageBounds = [[0,0] [imgHeight, imgWidth]];

//Add image overlay
L.imageOverlay(imageUrl, imageBounds).addTo(map);
map.fitBounds(imageBounds);

//Function to add markers
function addMarker(x, y, name){
    L.marker([y, x]).addTo(map)
        .bindPopup(name);

}

//Example markers
addMarker(0,0, "Spawn Point");
addMarker(100,100, "Starter Villager");
