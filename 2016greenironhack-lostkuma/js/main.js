
// get current date and time
var month, day;
var weather_text, weather_icon, icon_url;
var current_weather_data = {};
var input;
var freshness_by_weather;
var final_freshness;

function startTime() {
	// setup clock
	var currentDate = new Date();
	var hour = currentDate.getHours();
	var minute = currentDate.getMinutes();
	var second = currentDate.getSeconds();
	minute = checkSecMin(minute);
	second = checkSecMin(second);
	var am_or_pm;
	if (hour < 12) {
		am_or_pm = "am";
	} else if (hour == 12) {
		am_or_pm = "pm";
	} else if (hour > 12) {
		hour -= 12;
		am_or_pm = "pm";
	}
	var current_time = hour + ":" + minute + ":" + second + am_or_pm;
	document.getElementById("current-date").innerHTML = getCurrentDate() + " " + current_time;
	var t = setTimeout(startTime, 500);


	function getCurrentDate() {
		// get current year/month/day
		var days = ['Sun','Mon','Tue','Wed','Thur','Fri','Sat'];
		day = currentDate.getDate();
		month = currentDate.getMonth() + 1;
		var year = currentDate.getFullYear();
		var day_of_week = days[currentDate.getDay()];

		var current_date = month + "/" + day + "/" + year;
		var display_date = day_of_week + ", " + current_date + ", ";
		return display_date;
	}
}

function checkSecMin(i) {
	// check minute and second to add 0 in front if < 10
	if (i < 10) {
		i = "0" + i
	}
return i;
}

function seasonalVeggies() {
	// get list of seasonal veggies for this month
	var seasonal_veggies = []
	var veggies = VEGGIES;
	for (var key in veggies) {
		var seasons_of_veggie;
		seasons_of_veggie = veggies[key];
		for (var i = 0; i < seasons_of_veggie.length; i++) {
			if (seasons_of_veggie[i] == month) {
				seasonal_veggies.push(key.replace(/_/, " "));
			}
		}
	}
	document.getElementById("seasonal-veggies").innerHTML = seasonal_veggies.join("<br>");
}


function extractFeatures(current_weather_data) {
	// extract features on raw weather data input
	var rain, wind, snow, tmax, tmin, month, input;
	var	rain_raw = current_weather_data["RAIN"];
	var	wind_raw = current_weather_data["WIND"];
	var	snow_raw = current_weather_data["SNOW"];
	var	tmax_raw = current_weather_data["TMAX"];
	var	tmin_raw = current_weather_data["TMIN"];
	var	month_raw = current_weather_data["MONTH"];

	if (rain_raw == "N") {
		rain = 0.0;
	} else {
		rain = 1.0;
	}

	if (snow_raw == "N") {
		snow = 1.0;
	} else {
		snow = -1.0;
	}

	wind_raw = parseFloat(wind_raw) * 3.6;
	if (wind_raw < 25) {
		wind = 1.0;
	} else if (wind_raw >= 50) {
		wind = -1.0;
	} else {
		wind = 0.0;
	}

	tmax_raw = parseFloat(tmax_raw) * 10; 
	if (tmax_raw < 0) {
		tmax = -1.0;
	} else if (tmax_raw >= 150 && tmax_raw < 300) {
		tmax = 1.0;
	} else {
		tmax = 0.0;
	}

	tmin_raw = parseFloat(tmin_raw) * 10;
	if (tmin_raw < -100) {
		tmin = -1.0;
	} else if (tmin_raw >= 50 && tmin_raw < 200) {
		tmin = 1.0;
	} else {
		tmin = 0.0;
	}

	if (month_raw == 1 || month_raw == 2 || month_raw == 11 || month_raw == 12) {
		month = -1.0;
	} else if (month_raw == 3 || month_raw == 7 || month_raw == 8) {
		month = 0.0;
	} else {
		month = 1.0;
	}

	input = {
		"RAIN": rain,
		"SNOW": snow,
		"WIND": wind,
		"TMAX": tmax,
		"TMIN": tmin,
		"MONTH": month
	};

	return input;
}


function getWeatherDataCallback(result) {
	// get current weather raw
    var wind = result.list[0]["speed"];
    var tmax = result.list[0]["temp"]["max"];
    var tmin = result.list[0]["temp"]["min"];

    var weather_condition = result.list[0]["weather"][0];
    var weather_main = weather_condition["main"];

	var rain = "N";
	var snow = "N";

    if (weather_main == "Rain") {
    	var rain = "Y";
    } else if (weather_main == "Snow") {
    	var snow = "Y";
	}

    weather_text = weather_condition["description"];
    weather_icon = weather_condition["icon"];
    icon_url = "http://openweathermap.org/img/w/" + weather_icon + ".png";

    $("#weather-icon").attr("src", icon_url);
    document.getElementById("current-weather").innerHTML = weather_text;

    current_weather_data = {
    	"WIND": wind, 
    	"TMAX": tmax,
    	"TMIN": tmin,
    	"RAIN": rain,
    	"SNOW": snow,
    	"MONTH": month
    };

    // extract features
    input = extractFeatures(current_weather_data);
    console.log(input)
    
    // proceed to decision prediction when tree loaded and features extracted
    $.when(input, setupTree).then(function() {
		freshness_by_weather =  predict(input);
		console.log(freshness_by_weather)
		
		// import other extracted features data from datasheet
		var freshness_by_farmersmarket = DATA_SHEET.FarmersMarket[0][month];
		var freshness_by_hail = DATA_SHEET.Hail[0][month];
		var freshness_by_storm = DATA_SHEET.Storm[0][month];
		var freshness_by_seasonal_veggies = DATA_SHEET.SeasonalVeggiesCount[0][month];
		var freshness_by_water = DATA_SHEET.WabashRiver[0][month][day];

		// calculate final freshness based on predictions
		final_freshness = 0.5 * freshness_by_weather + 0.25 * freshness_by_seasonal_veggies
						+ 0.25 * freshness_by_farmersmarket + 0.15 * freshness_by_water 
						- 0.05 * freshness_by_storm - 0.1 * freshness_by_hail;

		// scaling
		final_freshness = final_freshness / 10;
	});
}


// api request daily weather predict in great lafayette area
$.ajax({
	type: "GET",
	url: "http://api.openweathermap.org/data/2.5/forecast/daily?id=4922462&units=metric&cnt=1&APPID=1f9c4b029f74d9edad2830f463e183d9",
	dataType: "json",
	success: getWeatherDataCallback
});

// load decision tree
var setupTree = loadDecisionTree();


startTime();
seasonalVeggies();

