var w = 270,
	h = 270;

var colorscale = d3.scale.category10();

var LegendOptions = []

var d = [
	[
	{axis:"price", value:0.5},
	{axis:"rating", value:0.5},
	{axis:"freshness", value:0.5},
	{axis:"parking", value:0.6},
	{axis:"open hour", value:0.3},
	{axis:"distance", value:0.8},
	{axis:"service", value:0.3}
	]
];

//Options for the Radar chart, other than default
var mycfg = {
  w: w,
  h: h,
  maxValue: 1.0,
  levels: 5,
  ExtraWidthX: 120
}

//Call function to draw the Radar chart
//Will expect that data is in %'s
RadarChart.draw("#radar-chart", d, mycfg);

//Initiate legend
var svg = d3.select('#body')
	.selectAll('svg')
	.append('svg')
	.attr("width", w)
	.attr("height", h)

//Create the title for the legend
var text = svg.append("text")
	.attr("class", "title")
	.attr('transform', 'translate(90,0)') 
	.attr("x", w - 70)
	.attr("y", 10)
	.attr("font-size", "12px")
	.attr("fill", "#404040")
	.text("Store Info");
		
//Initiate Legend	
var legend = svg.append("g")
	.attr("class", "legend")
	.attr("height", 100)
	.attr("width", 200)
	.attr('transform', 'translate(90,20)') 
	;
	//Create colour squares
	legend.selectAll('rect')
	  .data(LegendOptions)
	  .enter()
	  .append("rect")
	  .attr("x", w - 65)
	  .attr("y", function(d, i){ return i * 20;})
	  .attr("width", 10)
	  .attr("height", 10)
	  .style("fill", function(d, i){ return colorscale(i);})
	  ;
	//Create text next to squares
	legend.selectAll('text')
	  .data(LegendOptions)
	  .enter()
	  .append("text")
	  .attr("x", w - 52)
	  .attr("y", function(d, i){ return i * 20 + 9;})
	  .attr("font-size", "11px")
	  .attr("fill", "#737373")
	  .text(function(d) { return d; })
	  ;