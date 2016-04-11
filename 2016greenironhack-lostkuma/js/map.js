//init the google map in the webpage         
var map, 
    pos, 
    service, 
    infowindow, 
    infowindow_center, 
    directionsDisplay, 
    directionsService,
    marker_center;
var store_info_click = [];
var store_info_list = [];
var labels = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"];
var labelIndex = 0;
var distance, duration;

var price_value, 
    rating_value,
    service_value,
    openhour_value,
    distance_value,
    freshness_value;


function initMap() {
    pos = {lat: 40.424814, lng: -86.913691};
    
    //create the google map
    map = new google.maps.Map(document.getElementById("map"), {
        center: pos,
        zoom: 13
    });

    // set up info window
    infowindow = new google.maps.InfoWindow();

    // set up direction display and service
    directionsDisplay = new google.maps.DirectionsRenderer({suppressMarkers: true});
    directionsService = new google.maps.DirectionsService;

    service = new google.maps.places.PlacesService(map);

    // get current browser location
    infowindow_center = new google.maps.InfoWindow();
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(currentLocation_callback);
    } else {
        currentLocation_callback(pos);
        alert("You current location cannot be detected, so center is set to Purdue Mall");
    }
}


function currentLocation_callback(position) {
    pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
    };
    map.setCenter(pos);
    marker_center = new google.maps.Marker({
        map: map,
        position: pos,
        animation:  google.maps.Animation.DROP,
        icon: "./image/marker.png"
    });
    infowindow_center.setContent("You are here!")
    infowindow_center.open(map, marker_center)

    // request a nearby search service
    var near_by_search_data = {
        location: pos,
        radius: 4000,
        type: 'grocery_or_supermarket'
    };
    service.nearbySearch(near_by_search_data, searchNearByCallback);
}


function searchNearByCallback(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
            var place_id = results[i].place_id;
            getPlaceDetails(place_id);
        }
    }
}


function createMarkerAndDetailedInfo(place, store_info) {
    var placeLoc = place.geometry.location;
    var marker = new google.maps.Marker({
        map: map,
        label: labels[labelIndex++ % labels.length],
        position: place.geometry.location,
        animation:  google.maps.Animation.DROP
    });

    // click marker trigger event
    google.maps.event.addListener(marker, 'click', function() {  
        // add place name, if open now, place address, open in map to info window
        google_map_link = '<a target="_blank" href=' + store_info["map_url"] + '>View on Google Maps</a>'
        infowindow.setContent('<div><strong>' + store_info["name"] + '  ' + '(Open now: ' 
            + store_info["if_open_now"] + ')</strong><br>' + store_info["address"] + '<br>' + google_map_link);
        infowindow.open(map, this);
        // replace with store name and detailed info in side menu 
        setSideMenu(store_info);
        // get the route from current position to marker
        calculateAndDisplayRoute(directionsService, directionsDisplay, place);
        getDistance(pos, place.geometry.location);
        // set radar chart value
        price_value = null;
        rating_value = null;
        service_value = null;
        openhour_value = null;
        distance_value = null;
        freshness_value = null;
        setChartData1(store_info);
        drawChart_Basic();
        drawChart_Compare();
        
        $(document).ready(function() {
            // display radar chart
            $(".radar-chart").css('visibility','visible');
            // display direction button
            $("#get-direction").css('visibility', 'visible');
            // display directions on click
            $("#get-direction").click(function() {
                directionsDisplay.setMap(map);
                infowindow_center.setContent("<strong>You are " + distance + " away from this store</strong>" 
                    + "<br><strong>You can get there in " + duration + " by car</strong>");
                infowindow_center.open(map, marker_center);
            });
            // reset button
            directionsDisplay.setMap(null);
            infowindow_center.setContent("You are here!")
        });

        store_info_click.push(store_info);
    });
}

// After having place details
function getPlaceDetailsCallback(place, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
        var store_info = {
            place_id: place.place_id, 
            name: place.name, 
            address: place.formatted_address, 
            map_url: place.url, 
            phone: "?", 
            website: "?",
            rating: "?",
            price: "?",
            open_hour: "?",
            if_open_now: "?",
            open_hour_detail: "?"
        }  
        if (place.hasOwnProperty("formatted_phone_number")) {
            store_info["phone"] = place.formatted_phone_number;
        } 
        if (place.hasOwnProperty("website")) {
            store_info["website"] = place.website;
        } 
        if (place.hasOwnProperty("rating")) {
            store_info["rating"] = place.rating;
            store_info["user_ratings_total"] = place.user_ratings_total;
        } 
        if (place.hasOwnProperty("price_level")) {
            store_info["price"] = place.price_level;
        }
        if (place.hasOwnProperty("opening_hours")) {
            store_info["open_hour"] = place.opening_hours.weekday_text;
            store_info["open_hour_detail"] = place.opening_hours.periods;
            if(place.opening_hours.open_now == true) {
                store_info["if_open_now"] = 'Yes'
            } else {
                store_info["if_open_now"] = 'No'
            }
        }
        // creat marker and set click on marker event 
        // set info window and side menu content for store requested detail
        createMarkerAndDetailedInfo(place, store_info);
    } else {
        console.log('Place details request failed due to ' + status);
    }
}


function setTableContent(store_info) {
    $(document).ready(function() {

        html =  "<tr>" +
                "<td>" + store_info["name"] + "</td>" +
                "<td>" + store_info["address"] + "</td>" +
                "<td>" + store_info["website"] + "</td>" +
                "</tr>";

        var table_body = $(html);
    });
}


function getPlaceDetails(place_id) {
    var get_details_data = {
        placeId: place_id
    };
    service.getDetails(get_details_data, getPlaceDetailsCallback);
}


function getDirectionCallback(response, status) {
    if (status == google.maps.DirectionsStatus.OK) {
        directionsDisplay.setDirections(response);
    } else {
        console.log('Directions request failed due to ' + status);
    }
}


function calculateAndDisplayRoute(directionsService, directionsDisplay, place) {
    var direction_service_data = {
        origin: pos,
        destination: place.geometry.location,
        travelMode: google.maps.TravelMode.DRIVING
    };
    directionsService.route(direction_service_data, getDirectionCallback);
}


function getDistanceCallback(response, status) {
    if (status !== google.maps.DistanceMatrixStatus.OK) {
        console.log('Error was: ' + status);
    } else {
        distance = response.rows[0]["elements"][0]["distance"]["text"]
        duration = response.rows[0]["elements"][0]["duration"]["text"]
        setChartData2(distance);
        drawChart_Basic();
        drawChart_Compare();
    }
}


function getDistance(origin, destination) {
    var service_distance = new google.maps.DistanceMatrixService;
    var distance_matrix_data = {
        origins: [origin],
        destinations: [destination],
        travelMode: google.maps.TravelMode.DRIVING,
        unitSystem: google.maps.UnitSystem.IMPERIAL,
    };
    service_distance.getDistanceMatrix(distance_matrix_data, getDistanceCallback);
}


function setSideMenu(store_info) {
    // store name
    document.getElementById("store-name").innerHTML = store_info["name"];
    // store tel
    if (store_info["phone"] != "?") {
        document.getElementById("store-phone").innerHTML = store_info["phone"];
    } else {
        document.getElementById("store-phone").innerHTML = "";        
    }
    // store site
    if (store_info["website"] != "?") {
        document.getElementById("store-website").innerHTML = "Go to store website";
        document.getElementById("store-website").href = store_info["website"]
        document.getElementById("store-website").target = "_blank";
    } else {
        document.getElementById("store-website").innerHTML = "";
        document.getElementById("store-website").href = "";
        ;
    }
    // store today open hours
    var today = new Date();
    var day_of_week = today.getDay() - 1;
    if (day_of_week == -1) {
        day_of_week = 6;
    }
    if (store_info["open_hour"] != "?") {
        var hour_today = store_info["open_hour"][day_of_week];
        hour_today = hour_today.replace(/\u2013|\u2014/g, "-");
        var regex = /\d+:\d\d\s\w\w\s-\s\d+:\d\d\s\w\w/g;
        var match = regex.exec(hour_today);
        if (match == null) {
            document.getElementById("open-hour-today").innerHTML = "Open 24 hours";
        } else {
            document.getElementById("open-hour-today").innerHTML = "Open today: " + match[0]
        }
    } else {
        document.getElementById("open-hour-today").innerHTML = "";
    }
    // store rating
    if (store_info["rating"] != "?") {
        var stars = parseFloat(store_info["rating"]);
        var image_location = storeRating(stars);
        document.getElementById("store-rating").innerHTML = "Customer rating: " + stars + " <img src=" + image_location 
                                                        + "><br>Based on " + store_info["user_ratings_total"] + " reviews";
    } else {
        document.getElementById("store-rating").innerHTML = "";  
    }
}


function storeRating(stars) {
    var img;
    if (stars == 5) {
        img = "image/5-star.png";
    } else if (stars < 0.75) {
        img = "image/0.5-star.png"; 
    } else {
        for (i = 0.75; i < 5; i += 0.5) {
            if (i <= stars && stars < (i + 0.5)) {
                img = "image/" + (i + 0.25) + "-star.png"
            }
        }
    }
    return img;
}


function setChartData1(store_info) {
    if (store_info["price"] == "?") {
        price_value = 0.5;
    } else {
        price_value = store_info["price"] * 2 / 10;
    }
    var service_value_price = price_value;

    if (store_info["rating"] == "?") {
        rating_value = 0.5;
    } else {
        rating_value = store_info["rating"] * 2 / 10;
    }
    var service_value_rating = rating_value;

    if (store_info["open_hour_detail"] == "?") {
        openhour_value = 0.5;
    } else {
        if (store_info["open_hour_detail"].length == 1) {
            openhour_value = 1;
        } else {
            var total_hour = 0;
            for (i = 0; i < store_info["open_hour_detail"].length; i++) {
                var close_hour = store_info["open_hour_detail"][i]["close"]["hours"];
                if (close_hour == 0) {
                    close_hour = 24;
                }
                var open_hour = store_info["open_hour_detail"][i]["open"]["hours"];
                var open_period = close_hour - open_hour;
                total_hour += open_period;
            openhour_value = total_hour / 168;
            }
        }
    }
    service_value = 0.2 * service_value_price + 0.8 * service_value_rating;
}


function setChartData2(distance) {
    var regex = /(\d+.?\d*) mi/g;
    var match = regex.exec(distance);
    if (match == null) {
        distance_value == 0.5;
    } else {
        distance_value = match[1];
        distance_value = distance_value / 5;
    }
}

