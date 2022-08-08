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

	
function initMap() {
	
  let map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: latLng,
    restriction: {
           latLngBounds: bounds,
           strictBounds: false,
       },
  });
  
  // Create the search box and link it to the UI element.
  const input = document.getElementById("pac-input");
  const searchBox = new google.maps.places.SearchBox(input);
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
  // Bias the SearchBox results towards current map's viewport.
  map.addListener("bounds_changed", () => {
      searchBox.setBounds(map.getBounds());
  });
  
  searchBox.addListener("places_changed", () => {
      const places = searchBox.getPlaces();
      if (places.length == 0) {
          return;
      }
      // For each place, get the icon, name and location.
      const bounds = new google.maps.LatLngBounds();
      places.forEach((place) => {
          if (!place.geometry || !place.geometry.location) {
              console.log("Returned place contains no geometry");
              return;
          }
          if (place.geometry.viewport) {
              // Only geocodes have viewport.
              bounds.union(place.geometry.viewport);
          }
          else {
              bounds.extend(place.geometry.location);
          }
      });
      map.fitBounds(bounds);
  });
	  
	  
  $('#europeGo').on('click', function() {
		map.panTo(europe);
		map.setZoom(4);
	});
  $('#asiaGo').on('click', function() {
	  map.panTo(asia);
	  map.setZoom(3);
  });
  $('#americaGo').on('click', function() {
	  map.panTo(america);
	  map.setZoom(3);
  });
  $('#oceaniaGo').on('click', function() {
	  map.panTo(oceania);
	  map.setZoom(4);
  });
  $('#africaGo').on('click', function() {
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
            fillOpacity: 0.5,
            strokeWeight: 3,
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



window.initMap = initMap;
window.initialize = initialize;
export {};




