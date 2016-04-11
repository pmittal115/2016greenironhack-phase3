# 2016greenironhack-wang

2016 purdue-ironhack
====
Keywords
----
distance to user location, fresh vegetables, price

Description of datasets
----
 Primary data set: [online climate data](http://catalog.data.gov/dataset/climate-data-online-cdo).This is a climate dataset from data.gov, which could tell the weather situation in indiana for the past year.

 Price list from big supermarket like payless, walmart, meijer

 Price list from gas station

 Local farmer's markets pricelist

Brief Distription
----
 Input: user's current address or the place the user set off to buy vegetables, shopping list.
 
 Output: The place with the lowest price that contains all the vegetables on the shopping list.
 
 Algorithm:
 - Combine the local farmers' market pricelist with list from supermarket as a whole_pricelist.
 - Check out the weather that day, exclude local farmer's market pricelist from whole_pricelist if the weather is not available for farmers.
 - Choose the store that contains all the vegetables on the shopping list, put all of those store into active_store.
 - Use google map to calculate the fastest route (fast_route) from current place to all the stores in active_store, calculate current gas price to fast_route, set the result as gas_price.
 - Calculate the sum of gas_price and price for vegetables on the shopping list. Comes out with the place with the lowest price to the user.
 

 * Map View:
	1. Basic Map with specific location -- West Lafayette 
	2. Markers for location of markets
	3. Labels for markets' names
	4. Labels for markets' that are closed will be grey
	5. User could label their favourite markets and unlike markets in different colors.
	
 * Data Visualization:
	1. Use bar chart to show the comparation of the market the algorithm choose and user's favourite market.

	
 * Interaction Form:
	1. Use tables to show all the vegetables that are available in all the open markets, the user could choose from them and enter the amount they want to buy.
	2. User could change their routs to the supermarket. Similar with google map navigation.
	3. User could label their favourite markets and unlike markets in different colors.
	4. User could list all the markets that have all the vegetables in the list and see the routes from their place to the market.
