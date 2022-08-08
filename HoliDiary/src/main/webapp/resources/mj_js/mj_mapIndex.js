let latLng = { lat: 37.5662952, lng: 126.9779451 };
let europe = { lat: 56.0789635, lng: 0.9901297 };
let asia = { lat: 34.047863, lng: 100.6196553 };
let america = { lat: 11.863562, lng: -107.4353043 };
let oceania = { lat: -11.1692535, lng: 130.6697515 };
let africa = { lat: 4.364132, lng: 23.025819 };
const bounds = {
		north: 84.860203,
		south: -84.618493,
		west: -180.0,
		east: 180.0
};

const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let labelIndex = 0;
let map, infoWindow
	
function initMap() {
	
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: latLng,
    restriction: {
           latLngBounds: bounds,
           strictBounds: false,
       },
  });
  
  infoWindow = new google.maps.InfoWindow();
  const locationButton = document.createElement("button");
  locationButton.textContent = "현재위치";
  locationButton.classList.add("custom-map-control-button");
  map.controls[google.maps.ControlPosition.BOTTOM_LEFT].push(locationButton);
  locationButton.addEventListener("click", () => {
      // Try HTML5 geolocation.
      if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition((position) => {
              const pos = {
                  lat: position.coords.latitude,
                  lng: position.coords.longitude,
                  zoom: 14,
              };
              infoWindow.setPosition(pos);
              infoWindow.setContent("현재위치를 찾았습니다!" + "<br>" + "(사용자님의 위치와 대략 500m정도 차이가 날 수 있습니다)");
              infoWindow.open(map);
              map.setCenter(pos);
          }, () => {
              handleLocationError(true, infoWindow, map.getCenter());
          });
      }
      else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
      }
  });
	  
  $('.europeGo').on('click', function() {
		map.panTo(europe);
		map.setZoom(4);
	});
  $('.asiaGo').on('click', function() {
	  map.panTo(asia);
	  map.setZoom(3);
  });
  $('.americaGo').on('click', function() {
	  map.panTo(america);
	  map.setZoom(3);
  });
  $('.oceaniaGo').on('click', function() {
	  map.panTo(oceania);
	  map.setZoom(4);
  });
  $('.africaGo').on('click', function() {
	  map.panTo(africa);
	  map.setZoom(3);
  });
		
	  
  const drawingManager = new google.maps.drawing.DrawingManager({
        drawingMode: google.maps.drawing.OverlayType.MARKER,
        drawingControl: true,
        drawingControlOptions: {
            position: google.maps.ControlPosition.TOP_CENTER,
            drawingModes: [
                google.maps.drawing.OverlayType.MARKER,
                google.maps.drawing.OverlayType.CIRCLE,
                google.maps.drawing.OverlayType.POLYGON,
                google.maps.drawing.OverlayType.POLYLINE,
                google.maps.drawing.OverlayType.RECTANGLE,
            ],
        },
        /*
		 * markerOptions: { icon:
		 * "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png", },
		 */
        circleOptions: {
            fillColor: "#ffff00",
            fillOpacity: 0.2,
            strokeWeight: 2,
            clickable: false,
            editable: true,
            zIndex: 1,
        },
    });
    drawingManager.setMap(map);

	   

 // This event listener calls addMarker() when the map is clicked.
    google.maps.event.addListener(map, "click", (event) => {
        addMarker(event.latLng, map);
    });
    
    

// Adds a marker to the map.
function addMarker(location, map) {
    // Add the marker at the clicked location, and add the next-available
	// label
    // from the array of alphabetical characters.
    new google.maps.Marker({
        position: location,
        label: labels[labelIndex++ % labels.length],
        map: map,
    });
}






class DeleteMenu extends google.maps.OverlayView {
    constructor() {
        super();
        this.div_ = document.createElement("div");
        this.div_.className = "delete-menu";
        this.div_.innerHTML = "Delete";
        const menu = this;
        google.maps.event.addDomListener(this.div_, "click", () => {
            menu.removeVertex();
        });
    }
    onAdd() {
        const deleteMenu = this;
        const map = this.getMap();
        this.getPanes().floatPane.appendChild(this.div_);
        // mousedown anywhere on the map except on the menu div will close
		// the
        // menu.
        this.divListener_ = google.maps.event.addDomListener(map.getDiv(), "mousedown", (e) => {
            if (e.target != deleteMenu.div_) {
                deleteMenu.close();
            }
        }, true);
    }
    onRemove() {
        if (this.divListener_) {
            google.maps.event.removeListener(this.divListener_);
        }
        this.div_.parentNode.removeChild(this.div_);
        // clean up
        this.set("position", null);
        this.set("path", null);
        this.set("vertex", null);
    }
    close() {
        this.setMap(null);
    }
    draw() {
        const position = this.get("position");
        const projection = this.getProjection();
        if (!position || !projection) {
            return;
        }
        const point = projection.fromLatLngToDivPixel(position);
        this.div_.style.top = point.y + "px";
        this.div_.style.left = point.x + "px";
    }
    /**
	 * Opens the menu at a vertex of a given path.
	 */
    open(map, path, vertex) {
        this.set("position", path.getAt(vertex));
        this.set("path", path);
        this.set("vertex", vertex);
        this.setMap(map);
        this.draw();
    }
    /**
	 * Deletes the vertex from the path.
	 */
    removeVertex() {
        const path = this.get("path");
        const vertex = this.get("vertex");
        if (!path || vertex == undefined) {
            this.close();
            return;
        }
        path.removeAt(vertex);
        this.close();
    }
}


const deleteMenu = new DeleteMenu();
google.maps.event.addListener(drawingManager, "contextmenu", (e) => {
    // Check if click was on a vertex control point
    if (e.vertex == undefined) {
        return;
    }
    deleteMenu.open(map, drawingManager.getPath(), e.vertex);
});
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation
        ? "Error: The Geolocation service failed."
        : "Error: Your browser doesn't support geolocation.");
    infoWindow.open(map);
}

window.initMap = initMap;
//window.initialize = initialize;
export {};




