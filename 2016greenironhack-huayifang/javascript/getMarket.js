

function getResults(map, zip) {
    var xmlhttp = new XMLHttpRequest();
    var url = "http://search.ams.usda.gov/farmersmarkets/v1/data.svc/zipSearch?zip=" + zip;
    xmlhttp.open("GET", url, true);
    xmlhttp.send();

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            var myArr = xmlhttp.responseText;
            var text = JSON.parse(myArr);
            
			 //get markets number
		var markets_num = text.results.length;

		//process markets data to market objects
		var i = 0;
		for (i; i < markets_num; i++){
			var num = i + 1,
				marketId = text.results[i].id,
				marketNameDistance = text.results[i].marketname,
				nameIndex = text.results[i].marketname.indexOf(" "),
				marketName = text.results[i].marketname.substring(nameIndex),
				marketDistance = text.results[i].marketname.substring(0, nameIndex);
		
				//mark markets on the map
	        	getMarketDetails(marketId, marketName, num, marketDistance, map);	
		}


        }
    };
}

function getMarketDetails(id, name, num, distance, map) {
	var xmlhttp = new XMLHttpRequest();
	var url = "http://search.ams.usda.gov/farmersmarkets/v1/data.svc/mktDetail?id=" + id;
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
	xmlhttp.onreadystatechange = function() {
	    if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
	        var myArr = xmlhttp.responseText;
	        var text = JSON.parse(myArr);

	        //get google link in order to retrieve lat and lig
	        var latlngstring = text.marketdetails.GoogleLink;

	        //get lat from google link
	        var lat = get_lat(latlngstring);

	        //get lng from google link
	        var lng = get_lng(latlngstring);

	        //create market object
	        var market = {
	        	id:num,
	        	distance:distance,
	        	address:text.marketdetails.Address,
	        	googlelink:text.marketdetails.GoogleLink,
	        	products:text.marketdetails.Products,
	        	schedule:getSchedule(text.marketdetails.Schedule),
	        	name:name,
	        	location:{
	        		lat:parseFloat(lat),
	        		lng:parseFloat(lng),
	        	},
	        };
			
			setMarker(market.location, map, market, market.id);
		}
	};
}

//retrieve lat from googlelink in market details
function get_lat(string){
	var index_1 = string.indexOf("q=") + 2;
	var index_2 = string.indexOf("%2C%20");

	var lat = string.substring(index_1, index_2);

	return lat;
}

//retrieve lng from googlelink in market details
function get_lng(string){
	var index_1 = string.indexOf("%2C%20") + 6;
	var index_2 = string.indexOf("%20(");

	var lng = string.substring(index_1, index_2);

	return lng;
}

function getSchedule(raw_schedule){
	var schedule;

	var index = raw_schedule.indexOf(";");

	schedule = raw_schedule.substring(0, index);

	return schedule;
}

function setMarker(latlng, map, market, id){
	var marker, count;
	
	
	if (id < 10) {
		count = '0' + id.toString();
	}
	else {
		count = id.toString();
	}

	marker = new google.maps.Marker({
		position:latlng,
		map: map,
		icon: 'http://google-maps-icons.googlecode.com/files/green'+ count + '.png'
	});

	var infowindow = new google.maps.InfoWindow({
	    content: market.name
 	});

	marker.addListener('click', function() {
		//if another window is open, close it
        if(infowindow) {
            infowindow.close();
        }
	    //show_market_details(market);
	    infowindow.open(map, marker);
  	});

	return marker;
}