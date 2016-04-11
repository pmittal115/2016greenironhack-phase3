/**
Google map information.
**/


//init the google map in the webpage         
function initMap() {

   //alert(timeStamp());
    //variables for map and marks
    var elevator,
        map,
        marker,
        marker1,
        marker2,
        marker3,
        marker4,
        marker5,
        marker6,
        marker7,
        marker8,
        infowindow,
        xmlhttp,
        url = "";


    //create the google map
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 40.4285356, lng: -86.9101571},
        zoom: 13
    });
    //create a marker at the centre
    marker = new google.maps.Marker({
        position: {lat: 40.4285356, lng: -86.9101571},
        map: map,
        title: 'West Lafayette'
    });

    infowindow = new google.maps.InfoWindow({
                            content: ""
                        });
    google.maps.event.addListener(marker, 'click', function() {
        infowindow.setContent("West Lafayette");
                            infowindow.open(map, marker);
                        });



marker1 = new google.maps.Marker({
        position: {lat: 40.4325356, lng: -86.9151571}, 
        map: map,
        icon: 'http://google-maps-icons.googlecode.com/files/red' + ('0' + '1').slice(-2) + '.png',
        title: 'Fresh City Market'
    });


    infowindow = new google.maps.InfoWindow({
                            content: ""
                        });
    google.maps.event.addListener(marker1, 'click', function() {
        infowindow.setContent("Fresh City Market");
                            infowindow.open(map, marker1);

                            document.getElementById("market-name").innerHTML = "Fresh City Market";
                            document.getElementById("street-name").innerHTML = "720 Northwestern Ave, West Lafayette, IN 47906";
                            document.getElementById("website").innerHTML = "<a href=\"" + "http://www.yelp.com/biz/fresh-city-market-west-lafayette?osq=grocery+store" + "\">" + "http://www.yelp.com/biz/fresh-city-market-west-lafayette?osq=grocery+store" + "</a>";
                            document.getElementById("open-status").innerHTML = timeStamp();

                        });




marker2 = new google.maps.Marker({
        position: {lat: 40.45184734049178, lng: -86.91469666821289},
        map: map,
        icon: 'http://google-maps-icons.googlecode.com/files/red' + ('0' + '2').slice(-2) + '.png',
        title: 'Marsh Supermarkets'
    });

    infowindow = new google.maps.InfoWindow({
                            content: ""
                        });
    google.maps.event.addListener(marker2, 'click', function() {
      //location.reload();

        infowindow.setContent("Marsh Supermarkets");
                            infowindow.open(map, marker2);

                            document.getElementById("market-name").innerHTML = "Marsh Supermarkets";
                            document.getElementById("street-name").innerHTML = "2410 North Salisbury Street, West Lafayette, IN 47906";
                            document.getElementById("website").innerHTML = "<a href=\"" + "http://www.yelp.com/biz/marsh-supermarkets-west-lafayette" + "\">" + "http://www.yelp.com/biz/marsh-supermarkets-west-lafayette" + "</a>";
                            document.getElementById("open-status").innerHTML = timeStamp();;
//location.reload();


                        });


marker3 = new google.maps.Marker({
        position: {lat: 40.45354734049190, lng: -86.91719666821333}, 
        map: map,
        icon: 'http://google-maps-icons.googlecode.com/files/red' + ('0' + '3').slice(-2) + '.png',
        title: 'Pay Less Super Market'
    });


    infowindow = new google.maps.InfoWindow({
                            content: ""
                        });
    google.maps.event.addListener(marker3, 'click', function() {
        infowindow.setContent("Pay Less Super Market");
                            infowindow.open(map, marker3);

                            document.getElementById("market-name").innerHTML = "Pay Less Super Market";
                            document.getElementById("street-name").innerHTML = "1032 Sagamore Pkwy West, West Lafayette, IN 47906";
                            document.getElementById("website").innerHTML = "<a href=\"" + "http://www.yelp.com/biz/pay-less-super-markets-west-lafayette" + "\">" + "http://www.yelp.com/biz/pay-less-super-markets-west-lafayette" + "</a>";
                            document.getElementById("open-status").innerHTML = timeStamp();;

                        });



marker4 = new google.maps.Marker({
        position: {lat: 40.4630331, lng: -86.9182977},
        map: map,
        icon: 'http://google-maps-icons.googlecode.com/files/red' + ('0' + '4').slice(-2) + '.png',
        title: 'West Lafayette Farmers Market'
    });

    infowindow = new google.maps.InfoWindow({
                            content: ""
                        });
    google.maps.event.addListener(marker4, 'click', function() {
      //location.reload();

        infowindow.setContent("West Lafayette Farmers Market");
                            infowindow.open(map, marker4);

                            document.getElementById("market-name").innerHTML = "West Lafayette Farmers Market";
                            document.getElementById("street-name").innerHTML = "3065 North Salisbury Street, West Lafayette, IN 47906";
                            document.getElementById("website").innerHTML = "<a href=\"" + "http://wlfarmersmarket.com/" + "\">" + "http://wlfarmersmarket.com/" + "</a>";
                            document.getElementById("open-status").innerHTML = timeStamp();;
//location.reload();


                        });



        marker5 = new google.maps.Marker({
        position: {lat: 40.4578398, lng: -86.9332058},
        map: map,
        icon: 'http://google-maps-icons.googlecode.com/files/red' + ('0' + '5').slice(-2) + '.png',
        title: 'Walmart Supercenter'
    });

    infowindow = new google.maps.InfoWindow({
                            content: ""
                        });
    google.maps.event.addListener(marker5, 'click', function() {
      //location.reload();

        infowindow.setContent("Walmart Supercenter");
                            infowindow.open(map, marker5);

                            document.getElementById("market-name").innerHTML = "Walmart Supercenter";
                            document.getElementById("street-name").innerHTML = "2801 Northwestern Ave, West Lafayette, IN 47906";
                            //document.getElementById("phone-number").innerHTML = "(765) 463-0201";
                            document.getElementById("website").innerHTML = "<a href=\"" + "http://www.yelp.com/biz/walmart-supercenter-west-lafayette" + "\">" + "http://www.yelp.com/biz/walmart-supercenter-west-lafayette" + "</a>";
                            document.getElementById("open-status").innerHTML = timeStamp();;
                            //document.getElementById("scores").innerHTML = timeStamp();

});


        marker6 = new google.maps.Marker({
        position: {lat: 40.4695439, lng: -86.9554979},
        map: map,
        icon: 'http://google-maps-icons.googlecode.com/files/red' + ('0' + '6').slice(-2) + '.png',
        title: 'Meijer'
    });

    infowindow = new google.maps.InfoWindow({
                            content: ""
                        });
    google.maps.event.addListener(marker6, 'click', function() {
      //location.reload();

        infowindow.setContent("Meijer");
                            infowindow.open(map, marker6);

                            document.getElementById("market-name").innerHTML = "Meijer";
                            document.getElementById("street-name").innerHTML = "2636 US-52, W Lafayette, IN 47906";
                            //document.getElementById("phone-number").innerHTML = "(765) 637-4200";
                            document.getElementById("website").innerHTML = "<a href=\"" + "http://www.yelp.com/biz/meijer-west-lafayette" + "\">" + "http://www.yelp.com/biz/meijer-west-lafayette" + "</a>";
                            document.getElementById("open-status").innerHTML = timeStamp();;
                            //document.getElementById("scores").innerHTML = timeStamp();

});


        marker7 = new google.maps.Marker({
        position: {lat: 40.4126348, lng: -86.8418076},
        map: map,
        icon: 'http://google-maps-icons.googlecode.com/files/red' + ('0' + '7').slice(-2) + '.png',
        title: 'Fresh Thyme Farmer Market'
    });

    infowindow = new google.maps.InfoWindow({
                            content: ""
                        });
    google.maps.event.addListener(marker7, 'click', function() {
      //location.reload();

        infowindow.setContent("Fresh Thyme Farmer Market");
                            infowindow.open(map, marker7);

                            document.getElementById("market-name").innerHTML = "Fresh Thyme Farmer Market";
                            document.getElementById("street-name").innerHTML = "220 S Creasy Ln, Lafayette, IN 47905";
                            //document.getElementById("phone-number").innerHTML = "(765) 588-4383";
                            document.getElementById("website").innerHTML = "<a href=\"" + "http://www.yelp.com/biz/fresh-thyme-farmers-market-lafayette-lafayette" + "\">" + "http://www.yelp.com/biz/fresh-thyme-farmers-market-lafayette-lafayette" + "</a>";
                            document.getElementById("open-status").innerHTML = timeStamp();;
                            //document.getElementById("scores").innerHTML = timeStamp();

});


 //create a new httprequest for this session
    xmlhttp = new XMLHttpRequest();
    //json format data resource url 
    //url = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20html%20where%20url%3D'http%3A%2F%2Fw1.weather.gov%2Fobhistory%2FKLAF.html'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
    url = "https://data.cityofchicago.org/api/views/x5xx-pszi/rows.json?accessType=DOWNLOAD";
    xmlhttp.open("GET", url, true);
    xmlhttp.send();

    //once the request is accepted, process the fowllowing function to get data and complete the app information
    xmlhttp.onreadystatechange = function() {
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
            json = JSON.parse(text);
            

            
            //alert(json.data[1][1]);
            //document.getElementById("id01").innerHTML = myArr;
            
            //
            //add the information of the markets here 
            //

            var i = 0,
                // 2-level array for washed markets data
                washedData = [];
            for (i = 0; i<44; i++) {
                var dataLine = [];
                //latitude - 0
                dataLine.push(json.data[i][18]);
                //longitude - 1
                dataLine.push(json.data[i][19]);
                //name - 2
                dataLine.push(json.data[i][8]);
                //street - 3
                dataLine.push(json.data[i][9]);
                //day in week - 4
                dataLine.push(json.data[i][10]);
                //start time - 5
                dataLine.push(json.data[i][11]);
                //end time - 6
                dataLine.push(json.data[i][12]);
                //start date -7
                dataLine.push(json.data[i][13]);
                //end date - 8
                dataLine.push(json.data[i][14]);
                //website - 9
                dataLine.push(json.data[i][15][0]);

                washedData.push(dataLine);
            };
            //alert(washedData);
            //number of the markets
            numberOfMarkets = washedData.length;

            //add markers on the map
            google.maps.event.addListener(map, 'idle', function() {
            // Create an ElevationService
            elevator = new google.maps.ElevationService();
            $.each(markers, function(key, value)
            {
                value.setMap(null);
            });
            // getting bounds of current location
            boundBox = map.getBounds();
            southWest = boundBox.getSouthWest();
            northEast = boundBox.getNorthEast();
            lngSpan = northEast.lng() - southWest.lng();
            latSpan = northEast.lat() - southWest.lat();
            // adding 20 markers to the map at random locations

            var j = 0,
                location,
                positionalRequest,
                prev_infowindow =false;
            for (var j = 0; j < numberOfMarkets; j++)
            {
                location = new google.maps.LatLng(
                        southWest.lat() + latSpan * Math.random(),
                        southWest.lng() + lngSpan * Math.random()
                        );
                locations.push(location);
            }

            // Create a LocationElevationRequest object using the array's one value

            positionalRequest= {
                'locations': locations
            };
            elevator.getElevationForLocations(positionalRequest, function(results, status)
            {
                if (status === google.maps.ElevationStatus.OK)
                {
                    //if the infowindow is open
                    prev_infowindow =false;

                    $.each(results, function(key, value) {

                        //alert(key);
                        markers[key] = new google.maps.Marker({
                            position: {lat: 41.833392, lng: -88.0123393},
                            map: map,
                            icon: 'http://google-maps-icons.googlecode.com/files/red' + ('0' + '1').slice(-2) + '.png'
                        });
                        google.maps.event.addListener(markers[key], 'click', function() {
                            //if another window is open, close it
                            if( prev_infowindow ) {
                                prev_infowindow.close();
                            }
                            infowindow.setContent(washedData[key][2]);
                            infowindow.open(map, markers[key]);
                            //set the menu information about the market
                            document.getElementById("market-name").innerHTML = "Fresh City Market";
                            document.getElementById("street-name").innerHTML = "720 Northwestern Ave, West Lafayette, IN 47906";
                            //document.getElementById("website").innerHTML = "hhttp://www.yelp.com/biz/fresh-city-market-west-lafayette?osq=grocery+store";
                            //document.getElementById("open-status").innerHTML = " the market is " + contain(washedData[key][4], day());
                            document.getElementById("website").innerHTML = "<a href=\"" + "http://www.yelp.com/biz/fresh-city-market-west-lafayette?osq=grocery+store" + "\">" + "http://www.yelp.com/biz/fresh-city-market-west-lafayette?osq=grocery+store" + "</a>";

                            //dtata - scored stores
                            //you will use scoring algorithm to get these value in the final project
                            
                         
                            //document.getElementById("scores").innerHTML = "The final score for this market is " + parseInt(score(array)*100) + " out of 100";
                            document.getElementById("comments").innerHTML = "Please find the comments by customers here:";

                            //Options for the Radar chart, other than default
                           

                            //Call function to draw the Radar chart
                            //Will expect that data is in %'s
                            //RadarChart.draw("#chart", d, mycfg);
                        });
                        
                    });
                }
            });
        });


        }
    };
}

//show the request function in the text format
function myRequestFunction(arr) {
        var out = "";
        var i;
        for(i = 0; i < arr.length; i++) {
            out += '<a href="' + arr[i].url + '">' + 
            arr[i].display + '</a><br>';
        }
        document.getElementById("id01").innerHTML = out;
    }
// Add a listener for idle event and call getElevation on a random set of marker in the bound

//get the result of whether contains a substring
function contain(str, substr) {
    if(str.indexOf(substr) > -1)
        return "open";
    else
        return "closed";
}

//get the day in a week by the number
function day() {
    var d = new Date();
    var weekday = new Array(7);
    weekday[0]=  "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    return weekday[d.getDay()];
}

//the algorithm for scoring
//you should create your own reasonable methods for calculating scores
//function score(data) {
    //return data[0]*0.1 + data[2]*0.01 + data[3]*0.11 + data[1]*0.1 + data[4]*0.2 + data[5]*0.1 + data[6]*0.2 + data[7]*0.01 + data[8]*0.01;
//}


function timeStamp() {
// Create a date object with the current time
  var now = new Date();

// Create an array with the current month, day and time
  var date = [ now.getMonth() + 1, now.getDate(), now.getFullYear() ];

// Create an array with the current hour, minute and second
  var time = [ now.getHours(), now.getMinutes(), now.getSeconds() ];

// Determine AM or PM suffix based on the hour
  var suffix = ( time[0] < 12 ) ? "AM" : "PM";

// Convert hour from military time
  time[0] = ( time[0] < 12 ) ? time[0] : time[0] - 12;

// If hour is 0, set it to 12
  time[0] = time[0] || 12;

// If seconds and minutes are less than 10, add a zero
  for ( var i = 1; i < 3; i++ ) {
    if ( time[i] < 10 ) {
      time[i] = "0" + time[i];
    }
  }
// Return the formatted string
  return date.join("/") + " " + time.join(":") + " " + suffix;



}
