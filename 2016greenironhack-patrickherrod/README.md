# 2016greenironhack-patrickherrod
Readme Introduction	v. 1.0
```
1. Pro Compare

2. Keywords: freshness, retail price, travel distance, user input

3. Datasets:
	
	Compiled local market data from links of indiana.gov, illinois.gov, and ohio.gov
	Indiana (purdue): https://extension.purdue.edu/foodlink/foods.php?category=2&sort=asc
	Illinois: https://www.agr.state.il.us/wherefreshis/whatsinseason.pdf
	Ohio: https://ofbf.org/whats-in-season/
	Rather than web-scraping, dbInfo.sql contains data entries.
	These data sources provide the produce grown in the midwest climate region, and the months each item is "in season"

	Yes, Climate Data Online will be used by this application to help calculate produce freshness

	The first data set is not a data.gov set, but the compiled data from each state government site.

4. Pro Comparator is an application for local produce customers to use immediately before or while shopping.
A user will have the ability to choose a product and get the freshness of the product grown regionally,
the price of the product at retail stores (Walmart, Meijer, Payless, etc.), and the travel distance to one
of the retail stores.  User's will use the app to decide if local produce in hand is fresh enough and cheap
in comparison to retail counterparts.

	Map View:
	a. Map view will be of West Lafayette and Lafayette area.
	b. Y
	c. Y
	d. Y
	e. N

	Data Visualization:
	a. Y, the application will use a three axis, radar graph: freshness, price, distance.
	b. Y, markers will be clickable to focus on one local market
	
	Interaction Form:
	a. Y, there will be a drop down menu populated with the produce items compiled from the state governament site.
	b. Y, the user will first choose friuts or vegetables, then choose an item.
	c. N
	d. Y, users will be able to submit prices, for items, and even, new items into the database.
	e. N

5. To build this application, php will need to be installed (often a part of web server installations).  The code will just need to be copied.

6. Tested with: Chrome, Safari

7. NA 
```
