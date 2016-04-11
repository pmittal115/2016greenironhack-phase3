var map, marker, infowindow;

//this function is used for init your google map
function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
			//this coordinate is for west lafayette, feel free to use it!
		center: {lat: 40.4445, lng: -86.9136},
		zoom: 16
	});

	//you may also want to add a marker in the map, just do it!
	marker = new google.maps.Marker({
		position: {lat: 40.4445, lng: -86.9136},
		map: map,
		title: 'Hello World!'
	});

	//it would be cool if you add reactions here. Let's add an info window for click
	infowindow = new google.maps.InfoWindow({
	                    content: ""
	 });
	google.maps.event.addListener(marker, 'click', function() {
	    infowindow.setContent("3.6 West Lafayette Farmers Market");
	                        infowindow.open(map, marker);
	 });

}