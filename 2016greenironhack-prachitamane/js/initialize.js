function init(){
	//process the weather
	weather();
	time();

};

function output_weather(condition){
	//pass weather condition to html
	var weather_text = "Today is " + condition + "!";
	var weather_p = add_html_element("p", weather_text);
	document.getElementById("weather").innerHTML = "";
	document.getElementById("weather").appendChild(weather_p);
};