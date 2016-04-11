var map, marker, infowindow;

//this function is used for init your google map
function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
			//this coordinate is for west lafayette, feel free to use it!
		center: {lat: 40.4219, lng: -86.9125},
		zoom: 11
	});

	//you may also want to add a marker in the map, just do it!
	marker1 = new google.maps.Marker({
		position: {lat: 40.425830, lng: -86.914239},
		map: map,
		title: 'Purdue Farmers Market'
	});
	
		infowindow = new google.maps.InfoWindow({
	                    content: ""
	 });
	google.maps.event.addListener(marker1, 'click', function() {
	    infowindow.setContent("Purdue Farmers Market:" + '<br/>' + '<br/>' + "Oval Dr " + 
							'<a href="http://maps.google.com/maps?daddr=40.425830,+-86.914239+(5.6+Purdue+Farmers+Market)&hl=en">directions</a>');
	                        infowindow.open(map, marker1);
	 });
	 
	infowindow2 = new google.maps.InfoWindow({
	                    content: ""
	 });
	//Marker 2
	marker2 = new google.maps.Marker({
		position: {lat: 40.417715, lng: -86.891895},
		map: map,
		title: 'Historic Lafayette Farmers Market'
	});
	infowindow2 = new google.maps.InfoWindow({
	                    content: ""
	 });
	google.maps.event.addListener(marker2, 'click', function() {
	    infowindow2.setContent("Historic Lafayette Farmers Market");
	                        infowindow2.open(map, marker2);
	 });
	 //Marker 3
	marker3 = new google.maps.Marker({
		position: {lat: 40.4445, lng: -86.9136},
		map: map,
		title: 'Sagamore West Farmers Market'
	});
	infowindow3 = new google.maps.InfoWindow({
	                    content: ""
	 });
	google.maps.event.addListener(marker3, 'click', function() {
	    infowindow2.setContent("Sagamore West Farmers Market:" + '<br/>' + '<br/>' + "Cumberland Park " + 
							'<a href="http://maps.google.com/maps?daddr=40.461469,+-86.915836+(3.6+West+Lafayette+Farmers+Market)&hl=en">Directions</a>');
	                        infowindow2.open(map, marker3);
	 });
	//Marker 4
	marker4 = new google.maps.Marker({
		position: {lat: 40.461469, lng: -86.915836},
		map: map,
		title: 'West Lafayette Farmers Market'
	});
	infowindow4 = new google.maps.InfoWindow({
	                    content: ""
	 });
	google.maps.event.addListener(marker4, 'click', function() {
	    infowindow2.setContent("West Lafayette Farmers Market:" + '<br/>' + '<br/>' + "3065 N Salisbury St " + 
							'<a href="http://maps.google.com/maps?daddr=40.461469,+-86.915836+(3.6+West+Lafayette+Farmers+Market)&hl=en">directions</a>');
	                        infowindow2.open(map, marker4);
	 });
}