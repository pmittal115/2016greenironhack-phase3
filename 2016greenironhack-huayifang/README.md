This is an introduction to IronHack Application ------"Cheapest"

1. Keywords
freshness, price, transportation convenience, accurate, availability

2. Description of the datasets and function design
Climate Data Online[http://catalog.data.gov/dataset/climate-data-online-cdo]provides free access to NCDC's archive of global historical weather and climate data in addition to station history information. The application use CDO APIs to retrieve the current weather.
National Farmers Market Directory[https://www.ams.usda.gov/local-food-directories/farmersmarkets]The Directory is designed to provide customers with convenient access to information about farmers market listings to include: market locations, directions, operating times, product offerings, accepted forms of payment, and more.

3. Brief Description
With Cheapest, you can find the store that offers "Best" vegetable. The definition of "Best" would depend on you. If you think freshness is the most important, then Cheapest would tell you where you can buy fresh vegetable by listing all the stores sorted by freshness of their vegetables. When distance is your priority and freshness is second factor, Cheapest would help you find the nearest store with fresh vegetables.  Moreover, Cheapest would help you check if the food is available or not and filter the result according to your choice. Cheapest would also estimate the price trend of the food you search according to the recent weather conditions. Enjoy the Cheapest!
 
 * Map View:
	1. [Y] Basic Map with specific location (your map is located in a meaningful place, city of west lafayette for example)
	2. [Y] Markers for location of markets
	3. [Y] Labels for markets' names
	4. [Y] InfoWindow to show detail information of a market
	5. [N] [describe] Any other cover on the map (for example, cloud cover to show the weather effect)

 * Data Visualization:
	1. [Y] [describe] Used d3.js bubble chart to generalize the information about stores around Lafayette.
	2. [Y] [List] Look at different kinds of information by clicking on different bubbles.
	
 * Interaction Form:
	1. [N] [List] Any information output? list them. (text field, text area, label, plain HTML ...)
	2. [N] [List] Any operation option (filters)? List them. (search markets, search vegetables, filter based on price, sort based on convenience ...)
	3. [N] [List] Any information input? List them. (comments, markers, user preference ...)
	4. [N] [List] Interaction with Map? List them. (filter on price will affect map markers, sort on price will affect map markers, ...)
	5. [N] [List] Interaction with data visualization? List them. (filter, sort, set variables ...)
	

4. Test Case
The project has been tested by Chrome, Edge, Safari, and Firefox.

5. Additional information
This is a very basic version of the application. More features would be added to the application later. :)


