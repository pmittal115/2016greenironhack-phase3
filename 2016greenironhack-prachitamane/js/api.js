//request weather data
function weather(){
	//get weather condition from Yahoo Weather
	var xmlhttp = new XMLHttpRequest();
	var url = "https://query.yahooapis.com/v1/public/yql?q=select%20item.condition%20from%20weather.forecast%20where%20woeid%20%3D%2012778445&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
	xmlhttp.open("GET", url, true);
	xmlhttp.send();

	xmlhttp.onreadystatechange = function() {
	    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
	        var myArr = xmlhttp.responseText;
	        var text = JSON.parse(myArr);

	        //retrieve condition for json
	        var condition = text.query.results.channel.item.condition.text;

	        //output weather
	        output_weather(condition);
	    }
	};
};




function time(){
	var now = new Date();
	//create html object and add to html
	var time_p = add_html_element("p", now);
	document.getElementById("time").appendChild(time_p);
};