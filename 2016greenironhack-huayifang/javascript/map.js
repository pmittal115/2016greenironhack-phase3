

function initMap() {

    //variables for map and marks
    var elevator,
        map,
        marker,
        infowindow;

    //create the google map
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 40.4103426, lng: -86.8935134},
        zoom: 9
    });
    //create a marker at the centre
    marker = new google.maps.Marker({
        position: {lat: 40.4103426, lng: -86.8935134},
        map: map,
        title: 'Lafayette'
    });

    infowindow = new google.maps.InfoWindow({
                            content: ""
                        });
    google.maps.event.addListener(marker, 'click', function() {
        infowindow.setContent("Lafayette");
                            infowindow.open(map, marker);
                        });

    // Show the information on the map and panel. Choose a market for test.
 /**   markers = new google.maps.Marker({
        position: {lat: 40.4445, lng: -86.9136},
        map: map,
        icon: 'http://google-maps-icons.googlecode.com/files/yellow01.png'
    });
    google.maps.event.addListener(markers, 'click', function() {
        //if another window is open, close it
        if(infowindow) {
            infowindow.close();
        }
        infowindow.setContent("Sagamore West Farmers Market");
        infowindow.open(map, markers);
        //set the menu information about the market
        document.getElementById("market-name").innerHTML = "Sagamore West Farmers Market";
        document.getElementById("street-name").innerHTML = "Cumberland Park, West Lafayette, IN  47906"
        document.getElementById("website").innerHTML = "<a href=\"" +  "http://www.westlafayette.in.gov/farmersmarket"+ "\">" + " http://www.westlafayette.in.gov/farmersmarket" + "</a>";
        document.getElementById("open-status").innerHTML = "May to October Wed:3:00 pm - 6:30 pm";
        }); 
**/		

		getResults(map, 47906);


}