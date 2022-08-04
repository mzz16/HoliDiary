let map;
let markers = [];

const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let labelIndex = 0;

function initMap() {
    const seoul = { lat: 37.5662952, lng: 126.9779451 };
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: seoul,
        mapTypeId: "roadmap",
    });
    
    // 장소 상세정보
    const request = {
            placeId: "ChIJN1t_tDeuEmsRUsoyG83frY4",
            fields: ["name", "formatted_address", "place_id", "geometry"],
    };
    
    const infowindow = new google.maps.InfoWindow();
    const service = new google.maps.places.PlacesService(map);
    service.getDetails(request, (place, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK &&
            place &&
            place.geometry &&
            place.geometry.location) {
            const marker = new google.maps.Marker({
                map,
                position: place.geometry.location,
            });
            google.maps.event.addListener(marker, "click", () => {
                const content = document.createElement("div");
                const nameElement = document.createElement("h2");
                nameElement.textContent = place.name;
                content.appendChild(nameElement);
                const placeIdElement = document.createElement("p");
                placeIdElement.textContent = place.place_id;
                content.appendChild(placeIdElement);
                const placeAddressElement = document.createElement("p");
                placeAddressElement.textContent = place.formatted_address;
                content.appendChild(placeAddressElement);
                infowindow.setContent(content);
                infowindow.open(map, marker);
            });
        }
    });

    // 마커추가
    // This event listener calls addMarker() when the map is clicked.
    google.maps.event.addListener(map, "click", (event) => {
        addMarker(event.latLng, map);
    });
    
    // add event listeners for the buttons
    document
        .getElementById("show-markers")
        .addEventListener("click", showMarkers);
    document
        .getElementById("hide-markers")
        .addEventListener("click", hideMarkers);
    document
        .getElementById("delete-markers")
        .addEventListener("click", deleteMarkers);
    
    // Add a marker at the center of the map.
    addMarker(seoul, map);
}

// Adds a marker to the map.
function addMarker(location, map) {
    // Add the marker at the clicked location, and add the next-available label
    // from the array of alphabetical characters.
    const marker = new google.maps.Marker({
        position: location,
        label: labels[labelIndex++ % labels.length],
        map: map,
    });
    markers.push(marker);
}

// Sets the map on all markers in the array.
function setMapOnAll(map) {
    for (let i = 0; i < markers.length; i++) {
        markers[i].setMap(map);
    }
}
// Removes the markers from the map, but keeps them in the array.
function hideMarkers() {
    setMapOnAll(null);
}
// Shows any markers currently in the array.
function showMarkers() {
    setMapOnAll(map);
}
// Deletes all markers in the array by removing references to them.
function deleteMarkers() {
    hideMarkers();
    markers = [];
}


window.initMap = initMap;
export {};