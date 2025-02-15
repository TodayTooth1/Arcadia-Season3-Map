// Initialize Map
var map = L.map('map', {
    crs: L.CRS.Simple,  // Use simple coordinate system for images
    minZoom: -3,
    maxZoom: 1
});

// Define Image Size
var imgWidth = 5000, imgHeight = 5000;
var imageUrl ='https://raw.githubusercontent.com/TodayTooth1/Arcadia-Season3-Map/main/.idea/arcadia_season3_world_map.png';
var imageBounds = [[0, 0], [imgHeight, imgWidth]];  // Corrected bounds

// Add image overlay
L.imageOverlay(imageUrl, imageBounds).addTo(map);
map.fitBounds(imageBounds);

//Store markers for easy removal
var markers = [];

//Defines valid colors
var availableColors = ["red", "blue", "green", "orange", "purple", "darkred", "darkblue"];

//Function to create a custom marker using Awesome Markers
function createCustomIcon(color){
    return L.AwesomeMarkers.icon({
        icon: "info-sign", //Change icon if needed
        markerColor: color, //Uses the selected color
        prefix: "glyphicon" // Uses FontAwesome icons
    });
}

// Function to add markers
function addMarker(x, y, name, color = "blue") {
   var marker = L.marker([y, x], {icon: createCustomIcon(color) }).addTo(map);

   //Bind a tooltip that appears on hover
        marker.bindTooltip(name, {
            permanent: false, //only show on hover
            direction: "top", //Tooltip appears above the marker
            opacity: 0.9
        });

//Adds event to remove marker on click
    marker.on('click', function(){
       if (confirm("Are you sure you want to remove this marker?")){
        map.removeLayer(marker); //Removes the marker when clicked
        }
    });

    markers.push(marker); //Store marker for future reference
}

//Allow users to place markers dynamically
 map.on('click', function(ev){
//Gets the layerPoint position (pixel position of the click)
    var layerPoint = ev.layerPoint;

//Converts the pixel position to lat/lng using the maps 'layerPointToLatLng' method
    var latlng = map.mouseEventToLatLng(ev.originalEvent);

//Prompts user to enter a marker name
    var markerName = prompt("Enter a name for this marker:");
    if (!markerName) return; //Exit if the user cancels


//Prompt for color
    var markerColor = prompt("Enter a color for this marker (e.g., red, blue, green):");
    markerColor = markerColor ? markerColor.toLowerCase() : "blue"; //Default to blue if empty

//Validate color input
    if (!availableColors.includes(markerColor)){
        alert("Invalid color! Using default (blue).");
        markerColor = "blue";
    }

//adds a marker at the lat/lng derived from the layerPoint position
        addMarker(latlng.lng, latlng.lat, markerName, markerColor);

 });
