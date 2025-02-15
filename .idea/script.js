// Initialize Map
var map = L.map('map', {
    crs: L.CRS.Simple,  // Use simple coordinate system for images
    minZoom: -2,
    maxZoom: 2
});

// Define Image Size
var imgWidth = 5000, imgHeight = 5000;
var imageUrl = 'https://raw.githubusercontent.com/TodayTooth1/Arcadia-Season3-Map/9e88a53a09f1bac1a48718b9051b6da8ef2c91b5/.idea/arcadia_season3_world_map.png';
var imageBounds = [[0, 0], [imgHeight, imgWidth]];  // Corrected bounds

// Add image overlay
L.imageOverlay(imageUrl, imageBounds).addTo(map);
map.fitBounds(imageBounds);

// Function to add markers
function addMarker(x, y, name) {
    L.marker([y, x]).addTo(map)
        .bindPopup(name);
}

// Example markers
addMarker(0, 0, "Spawn Point");
addMarker(100, 100, "Starter Village");
