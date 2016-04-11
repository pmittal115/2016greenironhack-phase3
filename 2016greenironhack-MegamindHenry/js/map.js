//initialize google map
function initMap() {
	var map;

	map = new google.maps.Map(document.getElementById('map'), {
	  	center: {lat: 40.41798, lng: -86.920298},
	  	zoom: 9
	});

  	init(map);
}

//create marker on the google map
function new_marker(latlng, map, market){
	var marker,
		infowindow;

	//create new marker
	marker = new google.maps.Marker({
		position:latlng,
		map: map,
	});

	//create new infowindow
	infowindow = new google.maps.InfoWindow({
	    content: market.name
 	});

	//create new click event on marker
	marker.addListener('click', function() {
		//show market details
	    show_market_details(market);

	    //open infowindow
	    infowindow.open(map, marker);
  	});

	return marker;
}