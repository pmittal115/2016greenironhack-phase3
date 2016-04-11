var map, marker, infowindow, urlzip, url, xmlhttp, zip, latitude, longitude;
var disableListener = false;

//initialize map on homepage
function initMap() {

    var geocoder = new google.maps.Geocoder;
    var infowindow = new google.maps.InfoWindow;

    //centers map at given coordinates
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 40.4219, lng: -86.9125 },
        zoom: 16
    });

    //Places current location marker at default location
    marker = new google.maps.Marker({
        position: { lat: 40.4219, lng: -86.9125 },
        map: map,
        title: 'Home'
    });

    //Code to change marker color

    //google.maps.event.addListener(marker, 'click', function () {
    //    infowindow.open(map);
    //    //Change the marker icon
    //    marker.setIcon('https://www.google.com/mapfiles/marker_green.png');
    //});

    //Code for placing current location marker on mouse click

    function placeMarker(location) {
        if (disableListener) {
            return;
        }
        if (marker) {
            marker.setPosition(location);
            
        } else {
            marker = new google.maps.Marker({
                position: location,
                map: map
            });
        }
        geocodeLatLng(geocoder, map, infowindow);
    }
    google.maps.event.addListener(map, 'click', function (event) {
        //console.log("event triggered");
        placeMarker(event.latLng);
    });

    //store coordinates of current location
    google.maps.event.addListener(marker, "click", function (event) {
        
        latitude = this.position.lat();
        longitude = this.position.lng();

    });
    //Code for displaying marker's current latitude and longitude

    infowindow = new google.maps.InfoWindow({
        content: ""
    });
    //google.maps.event.addListener(marker, 'click', function () {
    //    infowindow.setContent('<p> Current Location:' + marker.getPosition() + '</p>');
    //    infowindow.open(map, marker);
        
    //});

    //geocode zipcode from latitude and longitude
    
    function geocodeLatLng(geocoder, map, infowindow) {
        var input = marker.getPosition().toString();
        //console.log(input);
        var latlngStr = input.split(",", 2);
        //console.log(latlngStr);
        vartemplat = parseFloat(latlngStr[0].substring(1));
        //var latlng = { lat: parseFloat(latlngStr[0]), lng: parseFloat(latlngStr[1]) };
        var latlng = { lat: vartemplat, lng: parseFloat(latlngStr[1]) };
        //console.log(latlng);
        geocoder.geocode({ 'location': latlng }, function (results, status) {
            if (status === google.maps.GeocoderStatus.OK) {
                if (results[1]) {
                    //map.setZoom(16);
                    map.setCenter(marker.getPosition());
                    //var marker = new google.maps.Marker({
                    //    position: latlng,
                    //    map: map
                    //});
                    infowindow.setContent(results[1].formatted_address);
                    infowindow.open(map, marker);
                    
                    //console.log(results);

                    //extract zipcode from address
                    var address = results[1].formatted_address.toString().split(",");
                    //console.log(address);
                    zip = address[2].toString().substring(4);
                    //console.log(zip);

                    xmlhttp = new XMLHttpRequest();
                    url = "http://search.ams.usda.gov/farmersmarkets/v1/data.svc/zipSearch?zip="+ zip;
                    xmlhttp.open("GET", url, true);
                    xmlhttp.send();

                    //obtain information about markets in given zip code
                    xmlhttp.onreadystatechange = function () {
                        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                            //get the text content from the page response
                            var myArr,
                                text,
                                json,
                                numberOfMarkets = 0,
                                markers = [],
                                boundBox,
                                southWest,
                                northEast,
                                lngSpan = 0,
                                latSpan = 0,
                                locations = [];

                            myArr = xmlhttp.responseText;
                            text = myArr;
                            //alert(text);
                            //JSON object with information from National Farmers Market Directory
                            json = JSON.parse(text);
                            //console.log(json);
                            //console.log(json.results[0].id);
                            

                            
                            function loadJson(map) {
                                //window.alert("Entered function");
                                
                                    $.getJSON("FarmersMarketsIndiana.json", function (json1) {
                                        //window.alert("Jquery");
                                        
                                        console.log(json1);
                                        //console.log(json1[1].FIELD1);
                                        
                                        var counter = 0;i=0,j=0;
                                        var washedData = [];
                                        var dataline;
                                        //for (i = 0; i<30;i++) {
                                        for(counter in json.results){
                                            //console.log("i=" + json.results[i].id);
                                            //for (j = 1; j<; j++) {
                                            for(j in json1){
                                                //match ids of markets
                                                //console.log("j=" + json1[j].FIELD1);
                                                if (json.results[i].id == json1[j].FIELD1) {
                                                    //console.log("match");
                                                    dataline = [];
                                                    //MarketName
                                                    dataline.push(json1[j].FIELD2);
                                                    //Dates Open
                                                    dataline.push(json1[j].FIELD13);
                                                    //Times Open
                                                    dataline.push(json1[j].FIELD14);
                                                    //Longitude
                                                    dataline.push(json1[j].FIELD21);
                                                    //Latitude
                                                    dataline.push(json1[j].FIELD22);
                                                    //Organic
                                                    dataline.push(json1[j].FIELD29);
                                                    //Website
                                                    dataline.push(json1[j].FIELD3);
                                                    //BakedGoods
                                                    dataline.push(json1[j].FIELD30);
                                                    //Cheese
                                                    dataline.push(json1[j].FIELD31);
                                                    //Crafts
                                                    dataline.push(json1[j].FIELD32);
                                                    //Flowers
                                                    dataline.push(json1[j].FIELD33);
                                                    //Eggs
                                                    dataline.push(json1[j].FIELD34);
                                                    //Seafood
                                                    dataline.push(json1[j].FIELD35);
                                                    //Herbs
                                                    dataline.push(json1[j].FIELD36);
                                                    //Vegetables
                                                    dataline.push(json1[j].FIELD37);
                                                    //Honey
                                                    dataline.push(json1[j].FIELD38);
                                                    //Jams
                                                    dataline.push(json1[j].FIELD39);
                                                    //Mushrooms
                                                    dataline.push(json1[j].FIELD55);
                                                    washedData.push(dataline);
                                                    //console.log("pushed data:" + dataline);
                                                    break;
                                                }
                                                
                                                
                                            }
                                            
                                            
                                            i++;
                                        }
                                        //console.log("exit loop");
                                        numberOfMarkets = washedData.length;
                                        //console.log(washedData);
                                        setMarkers(washedData,map);
                                        

                                    });
                                
                            }
                            loadJson(map);

                            function setMarkers(washedData,map)
                            {
                                
                                marketMarker = [];
                                var marketMarker;
                                var image = {
                                    url: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
                                    // This marker is 20 pixels wide by 32 pixels high.
                                    size: new google.maps.Size(20, 32),
                                    // The origin for this image is (0, 0).
                                    origin: new google.maps.Point(0, 0),
                                    // The anchor for this image is the base of the flagpole at (0, 32).
                                    anchor: new google.maps.Point(0, 32)
                                };
                                var shape = {
                                    coords: [1, 1, 1, 20, 18, 20, 18, 1],
                                    type: 'poly'
                                };

                                //display markers on map
                                for (var i=0; i<washedData.length;i++)
                                {
                                    disableListener = true;
                                    var market = washedData[i];
                                    console.log(market);
                                    myLatlng = new google.maps.LatLng(market[4], market[3]);
                                    marketMarker[i] = new google.maps.Marker({
                                        position: myLatlng,
                                        map: map,
                                        icon: image,
                                        shape: shape,
                                        title: market[1],
                                        zIndex: 1
                                    });
                                    marketMarker[i].addListener('click', function() {
                                        
                                      });
                                }
                                disableListener = false;

                                
                                //add markers on the map
                                //google.maps.event.addListener(map, 'idle', function () {
                                //    // Create an ElevationService
                                //    elevator = new google.maps.ElevationService();
                                //    $.each(markers, function (key, value) {
                                //        value.setMap(null);
                                //    });
                                //    // getting bounds of current location
                                //    boundBox = map.getBounds();
                                    
                                //    southWest = boundBox.getSouthWest();
                                //    northEast = boundBox.getNorthEast();
                                //    lngSpan = northEast.lng() - southWest.lng();
                                //    latSpan = northEast.lat() - southWest.lat();
                                    
                                //    // adding markers to the map at locations based on data

                                //    var j = 0,
                                //        location,
                                //        positionalRequest,
                                //        prev_infowindow = false;
                                //    for (var j = 0; j < numberOfMarkets; j++) {
                                //        //location = new google.maps.LatLng(
                                //        //        southWest.lat() + latSpan * Math.random(),
                                //        //        southWest.lng() + lngSpan * Math.random()
                                //        //        );
                                //        location = new google.maps.LatLng(
                                //                    washedData[j][4],
                                //                    washedData[j][3]
                                //            );
                                        
                                //        locations.push(location);
                                        
                                //    }

                                //    // Create a LocationElevationRequest object using the array's one value

                                //    positionalRequest = {
                                //        'locations': locations
                                //    };
                                //    elevator.getElevationForLocations(positionalRequest, function (results, status) {
                                //        if (status === google.maps.ElevationStatus.OK) {
                                //            //if the infowindow is open
                                //            prev_infowindow = false;

                                //            $.each(results, function (key, value) {
                                //                console.log(key.value);
                                //                //alert(key);
                                //                markers[key] = new google.maps.Marker({
                                //                    position: { lat: Number(washedData[key][4]), lng: Number(washedData[key][3]) },
                                //                    map: map,
                                //                    icon: 'http://google-maps-icons.googlecode.com/files/red' + ('0' + key.toString()).slice(-2) + '.png'
                                //                });
                                //                google.maps.event.addListener(markers[key], 'click', function () {
                                //                    //if another window is open, close it
                                //                    if (prev_infowindow) {
                                //                        prev_infowindow.close();
                                //                    }
                                //                    infowindow.setContent(washedData[key][2]);
                                //                    infowindow.open(map, markers[key]);
                                //                    //set the menu information about the market
                                //                    //    document.getElementById("market-name").innerHTML = washedData[key][2];
                                //                    //    document.getElementById("street-name").innerHTML = washedData[key][3];
                                //                    //    document.getElementById("website").innerHTML = "<a href=\"" + washedData[key][9] + "\">" + washedData[key][9] + "</a>";
                                //                    //    document.getElementById("open-status").innerHTML = "Today the market is " + contain(washedData[key][4], day());

                                //                    //    //dtata - scored stores
                                //                    //    //you will use scoring algorithm to get these value in the final project
                                //                    //    //here we only use random method to show the process
                                //                    //    var w = 200,
                                //                    //        h = 250,
                                //                    //        array = [],
                                //                    //        i = 0,
                                //                    //        d,
                                //                    //        mycfg;

                                //                    //    for (i = 0; i < 9; i++) {
                                //                    //        array[i] = Math.random();
                                //                    //    }
                                //                    //    d = [
                                //                    //        [
                                //                    //            { axis: "Open hours", value: array[0] },
                                //                    //            { axis: "Availability", value: array[1] },
                                //                    //            { axis: "Freshness", value: array[2] },
                                //                    //            { axis: "Distance", value: array[3] },
                                //                    //            { axis: "Prices", value: array[4] },
                                //                    //            { axis: "Customer ratings", value: array[5] },
                                //                    //            { axis: "Personal preference", value: array[6] },
                                //                    //            { axis: "Other", value: array[7] },
                                //                    //            { axis: "service", value: array[8] }
                                //                    //        ]
                                //                    //    ];

                                //                    //    document.getElementById("scores").innerHTML = "The final score for this market is " + parseInt(score(array) * 100) + " out of 100";
                                //                    //    document.getElementById("comments").innerHTML = "Please find the comments by customers here:";

                                //                    //    //Options for the Radar chart, other than default
                                //                    //    mycfg = {
                                //                    //        w: w,
                                //                    //        h: h,
                                //                    //        maxValue: 0.6,
                                //                    //        levels: 6,
                                //                    //        ExtraWidthX: 200
                                //                    //    }

                                //                    //    //Call function to draw the Radar chart
                                //                    //    //Will expect that data is in %'s
                                //                    //    RadarChart.draw("#chart", d, mycfg);
                                //                });

                                //            });
                                //        }
                                //    });
                                //});
                            }
                            
                        }
                    }
                    

                } else {
                    window.alert('No results found');
                }
            } else {
                window.alert('Geocoder failed due to: ' + status);
            }
        });

        

    }
}