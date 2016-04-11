/*
 * Author: Xuefeng Luo hakunamatatahenry@gmail
 */


//request market data
function markets(map, zip = 47906){
	var xmlhttp,
		url;

	//request to get local markert info by zipcode
	xmlhttp = new XMLHttpRequest();
	url = "http://search.ams.usda.gov/farmersmarkets/v1/data.svc/zipSearch?zip=" + zip;
	xmlhttp.open("GET", url, true);
	xmlhttp.send();

	xmlhttp.onreadystatechange = function() {
	    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
	    	var myArr,
	    		text,
	    		markets_num;

	        myArr = xmlhttp.responseText;
	        text = JSON.parse(myArr);

	        //get markets number
	        markets_num = text.results.length;

	        //process markets data to market objects
	        //in order to provent 429 error settimeout for each request
	        var i = 0;

	        myLoop();

			function myLoop () {
				//set timeout to 0.4 secs
			   	setTimeout(function () {
			      	if (i < markets_num) {
			      		var num,
			      			market_id,
			      			market_name_distance,
			      			name_index,
			      			market_name,
			      			market_distance;


			         	myLoop();

			         	//process the market data with id, name, distance
			         	num = i + 1;
			        	market_id = text.results[i].id;
			        	market_name_distance = text.results[i].marketname;
			        	name_index = text.results[i].marketname.indexOf(" ");
			        	market_name = text.results[i].marketname.substring(name_index);
			        	market_distance = text.results[i].marketname.substring(0, name_index);

			        	//pass data and call market details function
			        	market_details(market_id, market_name, num, market_distance, map);

			        	//count increment
			        	i++;

			      	}
			   	}, 400)
			}

	    }
	};
}



//request market details data
function market_details(id, name, num, distance, map){
	var xmlhttp,
		url;

	// console.log(num);
	xmlhttp = new XMLHttpRequest();
	url = "http://search.ams.usda.gov/farmersmarkets/v1/data.svc/mktDetail?id=" + id;
	xmlhttp.open("GET", url, true);
	xmlhttp.send();

	xmlhttp.onreadystatechange = function() {
	    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
	    	var myArr,
	    		text,
	    		latlngstring,
	    		lat,
	    		lng,
	    		product_num,
	    		market,
	    		zip_index,
	    		zip;

	        myArr = xmlhttp.responseText;
	        text = JSON.parse(myArr);

	        //get google link in order to retrieve lat and lig
	        latlngstring = text.marketdetails.GoogleLink;

	        //get lat from google link
	        lat = get_lat(latlngstring);

	        //get lng from google link
	        lng = get_lng(latlngstring);

	        product_num = cal_product_num(text.marketdetails.Products);

	        //set product to default if the num is unavailable online
	        if(product_num === 0) product_num = 5;

	        //create market object
	        market = {
	        	id:num,
	        	distance:distance,
	        	address:text.marketdetails.Address,
	        	googlelink:text.marketdetails.GoogleLink,
	        	products:text.marketdetails.Products,
	        	schedule:get_schedule(text.marketdetails.Schedule),
	        	name:name,
	        	location:{
	        		lat:parseFloat(lat),
	        		lng:parseFloat(lng),
	        	},
	        	score:{
	        		price:0.25,
	        		freshness:0.25,
	        		variety:score_variety(product_num),
	        		distance:score_distance(distance),
	        	},
	        };

	        //get zip form address
	        zip_index = market.address.lastIndexOf(",");
	        zip = market.address.substring(zip_index + 2);

	        //request climate data
	        climate(zip, market, map);
	    }
	};
}

//request weather data
function weather(){
	var xmlhttp,
		url;

	//get weather condition from Yahoo Weather
	xmlhttp = new XMLHttpRequest();
	url = "https://query.yahooapis.com/v1/public/yql?q=select%20item.condition%20from%20weather.forecast%20where%20woeid%20%3D%2012778445&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
	xmlhttp.open("GET", url, true);
	xmlhttp.send();

	xmlhttp.onreadystatechange = function() {
	    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
	    	var myArr,
	    		text,
	    		condition;

	        myArr = xmlhttp.responseText;
	        text = JSON.parse(myArr);

	        //retrieve condition for json
	        condition = text.query.results.channel.item.condition.text;

	        //output weather
	        output_weather(condition);
	    }
	};
}

//get latlng for zip when search new markets by zipcode
function show_search_result(zip){
	var xmlhttp,
		url;

	xmlhttp = new XMLHttpRequest();
	url = "http://maps.googleapis.com/maps/api/geocode/json?address=" + zip + "&sensor=false";
	xmlhttp.open("GET", url, true);
	xmlhttp.send();

	xmlhttp.onreadystatechange = function() {
	    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
	    	var myArr,
	    		text,
	    		latlng;

	        myArr = xmlhttp.responseText;
	        text = JSON.parse(myArr);

	        //get latlng for response
	        latlng = text.results[0].geometry.location;

	        //redo the map and table
	        redraw_map_search(latlng, zip);
	    }
	};
}

//reques climate data
function climate(zip = 47906, market, map){
	var xmlhttp,
		token,
		year,
		year_start,
		url;

	//request climate data online
	xmlhttp = new XMLHttpRequest();
	token = "xuoVwFiQRBuxlUAfZTjwEjwpkHSgZrfh";
	year = date_year();
	year_start = year - 1;
	url = "http://www.ncdc.noaa.gov/cdo-web/api/v2/data?datatypeid=MNTM&datatypeid=TPCP&datasetid= GHCNDMS&locationid=ZIP:" + zip + "&startdate=" + year_start + "-01-01&enddate=" + year + "-01-01";
	xmlhttp.open("GET", url, true);
	xmlhttp.setRequestHeader("token", token);
	xmlhttp.send();

	xmlhttp.onreadystatechange = function() {
	    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
	    	var myArr,
	    		text,
	    		price,
	    		price_num,
	    		freshness,
	    		freshness_num;

	        myArr = xmlhttp.responseText;
	        text = JSON.parse(myArr);

	        price = 0;
	        price_num = 0;

	        freshness = 0;
	        freshness_num = 0;

	        if (text.results !== undefined){

	        	var i;
	        	//process climate data
		        for (i = 0; i < text.results.length; i++)
		        {
		        	if(text.results[i].datatype === "TPCP")
		        	{
		        		price += text.results[i].value;
		        		price_num++;
		        	}

		        	if(text.results[i].datatype === "MNTM")
		        	{
		        		freshness += text.results[i].value;
		        		freshness_num++;
		        	}
		        }

		        //pass data to market object
		        market.score.price = price/price_num/3000;

		        //if data is unavailable online then set to default
		        if(freshness_num !== 0)
		        {
		        	market.score.freshness = ((freshness/freshness_num) + 100) / 400;
		    	}

		    }

	        //add to market table
	        market_table(market);

	        //add new google marker in map
	        new_marker(market.location, map, market);

	    }
	};

}

