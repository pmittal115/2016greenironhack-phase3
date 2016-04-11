function search()  {
			document.getElementById("test").innerHTML = "Hello World!";
		}
function initMap() {
	// Initializes the map and centers it at West Lafayette
	var myLatLng = {lat: 40.425869, lng:  -86.908066};
	var mapDiv = document.getElementById('map');
	var map = new google.maps.Map(mapDiv, {
		center: myLatLng, 
		zoom: 15,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	});

	//Create the search box and link it to the UI element.
	var input = document.getElementById('pac-input');
	var searchBox = new google.maps.places.SearchBox(input);
	map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

	//Bias the SearchBox results towards current map's viewport.
	map.addListener('bounds_changed', function() {
	searchBox.setBounds(map.getBounds());
	});

	var markers = [];
	//Listen for the event fired when the user selects a prediction and retrieve
	//more details for that place.
	searchBox.addListener('places_changed', function() {
	var places = searchBox.getPlaces();

	if (places.length == 0) {
	  return;
	}

	//Clear out the old markers.
	markers.forEach(function(marker) {
	  marker.setMap(null);
	});
	markers = [];

	//For each place, get the icon, name and location.
	var bounds = new google.maps.LatLngBounds();
	places.forEach(function(place) {
	  var icon = {
		url: place.icon,
		size: new google.maps.Size(71, 71),
		origin: new google.maps.Point(0, 0),
		anchor: new google.maps.Point(17, 34),
		scaledSize: new google.maps.Size(25, 25)
	  };

	  //Create a marker for each place.
	  markers.push(new google.maps.Marker({
		map: map,
		icon: icon,
		title: place.name,
		position: place.geometry.location
	  }));
	  
	  myLatLng = {lat: 40.417715, lng: -86.891895}
		
	  markers.push(new google.maps.Marker({
		  map: map,
		  icon: icon,
		  title: place.name,
		  position: myLatLng
	  }));
	  
	  myLatLng = {lat: 40.4445, lng:  -86.9136};
	  
	  markers.push(new google.maps.Marker({
		  map: map,
		  icon: icon,
		  title: place.name,
		  position: myLatLng
	  }));
	  
	  myLatLng = {lat: 41.4670736, lng:  -87.0622542};
	  
	  markers.push(new google.maps.Marker({
		  map: map,
		  icon: icon,
		  title: place.name,
		  position: myLatLng
	  }));

	  if (place.geometry.viewport) {
		//Only geocodes have viewport.
		bounds.union(place.geometry.viewport);
	  } else {
		bounds.extend(place.geometry.location);
	  }
	});
	map.fitBounds(bounds);
	});

}