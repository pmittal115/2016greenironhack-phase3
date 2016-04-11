**Find My Veggies** v1.1.0 - 2016-04-07  

* **Note for chrome users! Firefox and Safari can skip this**  
	**The page needs to be ran on a local server or real server!**  
	**If Python is installed on the computer:**  
	**1. Please open terminal and go to the directory that contain the index.html file**  
		(i.e: cd Desktop/iron-hack/lostkuma.....)  
	**2. For Python 3 call: python -m http.server**  
	**3. For Python 2.7 call: python -m SimpleHTTPServer**  
	**Then go to http://localhost:8000/**  
	**Otherwise follow (https://github.com/mrdoob/three.js/wiki/How-to-run-things-locally)**  

* **Note about Google Map Quota Limitation**  
	**Request store details will go over quota limit for the free plan users**  
	**There is a solution, however it will slow down the speed of the page significantly**  
	**Therefore, I just left it with it's quota capability so that the page loads faster since it's already slow with all that callback functions and stuff**  


This is a Web App to help people find fresh and cheap vegetables near the person's current location for Great Lafayette area. (Only Great Lafayette area will the app have a very good percision, reasons see Data processing part)

The App uses Google Map API combined with machine learning algorithm using open datasets to display features for local food markets regarding to vegetables.
Those features include but not limited to: freshness, price, open hours, distance, predicted transportation time, customer ratings, service, etc. for a single store. As well as the comparison function over these features for multiple stores.  

**Description**  
* Datasets   
	* Climate Data Online (http://catalog.data.gov/dataset/climate-data-online-cdo)  
	  Daily summaeries for Purdue Airport station and West Lafayette station from 2011/1/1 to 2016/1/31  
	  	* Columns used: Precipitation, Winds, Snow, Maximum temperature, Minimum temperature  
	  	This is devided up to training set and test set and trained with machine learning in decision tree  
	* National farmer's market directory (http://catalog.data.gov/dataset/national-farmers-market-directory)   
	  	* Columns used: Farmer's market open seasons for Lafayette and West Lafayette, IN  
	  	This is used as factors that can affect freshness monthly  
	* Surface water data for the nation (http://catalog.data.gov/dataset/usgs-surface-water-data-for-the-nation-national-water-information-system-nwis)  
	  	* Columns used: surface water for wabash river at lafayette: average daily discharge from 1923/10/1 to 2015/9/30  
	  	This is used as factors that can affect freshness daily  
	* Severe weather data (http://catalog.data.gov/dataset/severe-weather-data-inventory)  
	  	* Columns used: great lafayette area storm and hail reports from 2011/1/1 to 2015/12/31  
	  	This is used as factors that can affect freshness monthly  
	---------------- the above datasets are from data.gov ----------------
	* Seasonal vegetable chart (http://www.cuesa.org/eat-seasonally/charts/vegetables)  
	  	* Vegetable names and in season months  
	  	This is used as factors that can affect freshness monthly  
	* Google Store Details data gotten from query (https://maps.googleapis.com/maps/)  
	  	* Geometry location, place_id, place name, place address, place phone number, place website, place rating, place price level, place open hours  
	  	Some of this is used as factors that can affect freshness locally  
	* For more detailed information about how datasets are used see Data Processing
	
* Data Processing
	* Machine learning algorithm was used to process the climate data online datasets in order to get more reasonable prediction on freshness using current weather based on the old climate data  
	* However, it is very hard for one individual to process a huge amount of data within limited time period, only climate data for lafayette area are taken and trained using decision tree  
	* Raw climate data for the past 5 years on daily maximum temperatue, minimum temperature, rain, snow, and wind speed are taken and washed combined with month are inported to decision tree in python as training set  
	* The initial freshness feature are set to zero for all the rows in the dataset, and is calculated in a 1 to 10 scale using feature functions to assign a freshness score for the training set  
	* After training in python, the decision tree nodes and necessary data points are printed and imported to javascript manually (since there's no need to load the decision tree for training every time when the webpage is loaded) and the decisions are made with javascript predict function (see decisiontree.js)  
	* The current climate data, gotten from open weather map api, including current day predicted maximum temperature, minimum temperature, rain, snow, and wind speed data are then served as input for the decision tree to predict a current freshness level affected by weather factor  
	* Other datasets, the farmer's market data, severe weather data, seasonal vegetable data and water discharge data are processed using python. All the processed data is in 1 to 10 scale for easier calculation  
	* Then each factor that will affect current day's freshness (weather, water, farmer's market, severe weather, in season vegetables) is assigned with a weight to calculate a final freshness score by the environment factors.
	* Idealy, the restock date and time for the stores and distance from the store to the products provider should be considered as features for calculating individual stores differences. However, these data are nowhere can be found online, so in this case, instead of the ideal situation, store rating and open hours are considered to give the individual differences on freshness level. The assumption is, the longer total weekly open hour is, the more restock times it will be for a single store; and the higher rating it is, the freshier products that the store is selling.
	* Limitations:
		* There is no well-defined algorithms for calculting freshness of vegetables yet, the algorithm used in this app mostly based on assumptions and common sense, which might differ from the general facts. More studies on how exactly weather will affect vegetable growth and freshness should be considered for a better algorithm.  
		* Decision tree might not be the best way for prediction in this case, however due to lots of limitations, no other machine learning algorithm was tested.  
		* The test dataset, though returned a 100% accuracy on predicting the freshness level, only include 31 data points taken from January 2016 from the same stations. The algorithm need to be tested on more varied datasets from different months, however due to the incompletence of newer and older data, no further testing was done.  
		* Due to the amount of data that has to be processed and tagged for prediction, only lafayette and west lafayette area's weather data were trained. So this app will only return good predictions (assume the algorithm is well defined) for these areas.  
		* This algorithm only serve as a template for a reasonable prediction, but cannot be applied generally (unfortunately, there's no correct solusion to determine freshness).  

* Map View
	* Initialized Map will center at user's location based on browser location with drop pin
	* If browser location cannot be determined, the map will center at purdue mall
	* Current location displayed with info window saying "You are here"
	* Nearby stores will be displayed after centering with drop pin
	* Click on marker
		* Info window displays store name, address, link to google map  
		* Side menu displays detailed information  
		* Side menu has button "Get Direction", click on button  
			* displays driving route  
			* info window displays distance and travel time  
	
* Data Visualization
	* Radar chart for single store's features
	* side menu tab 1 - basic info
		* name, phone, website, today's open hour and rating if the store have them  
		* radar chart for detailed features  
	* side menu tab 2 - compare stores (need further edition)  
		* compare three stores information with radar chart  
		* features of the stores are displayed for choices  
	* side menu tab 3 - seasonal vegetable chart  
		* seasonal vegetables for this month are displayed  

* Interation Form:  
	* Information output: store links and link to google maps, google map place details output for each store. Store directory on the third page    
	* Operation option: switch between tabs, turn on/off features, current date, time and weather displayed on top right and will disappear if browser window gets small. App starts with a cover which can scroll down with animation when clicking on buttons and navigation bar on top  
	* Information input: click to get direction, turn on/off features for comparison of stores  
	* Interaction with map: click on markers, info window displays, get directions  
	* Interaction with data visualization: Store directory link to website, checkboxes enable/disable features for comparison which will change the data displayed  

**Content**  
* README.txt  --This file.  
* index.html  --Web page for the App  
* image  --A directory contains all images used in the website  
* css  --A directory contains all css files  
* js  --A directory contains all the javescript files  
	* datasheet.js --Processed data. Everything is scaled to a 1 to 10 scale  
	* drawChartBI.js --Script for radar chart on basic info tab  
	* drawChartCS.js --Script for radar chart on compare stores tab  
	* main.js --Script for functions other than map  
	* map.js --Script for Google map and related functions  
	* radarChart.js --Radar chart initializing  
	* decisiontree.js --Decision tree in javascript
	* veggies.js --Constants for monthly vegetables  
	* bootstrap.min.js --Bootstrap  
	* jquery.easing.min.js --Multiple easing option script for scrolling effect  
	* scrolling-nav.js --Scrolling effect of the page  
* data_processing --A directory with all data and data processing scripts used  
	* decisiontree.py --Python file for process decisiontree using weather data  
	* processdata.py --Python file for processing and scaling raw data  
	* weather_data_for_training.csv --Training set used for decision tree (2011/1/1 - 2015/12/31 daily summary)  
	* weather_data_for_test.csv --Testing set used for decision tree (2016/1/1 - 2016/1/31 daily summary)
	* weather_data_raw.csv --Organized raw weather data (2011/1/1 - 2015/12/31 daily summary for purdue station)  
	* surface_water_data.csv --Surface water data (1923/10/1 - 2015/9/30 daily average discharge at wabash river station)  
	* hail --A directory for hail data .txt (2011/1/1 - 2015/12/31 hailing report list)  
	* storm --A directory for storm data .txt (2011/1/1 - 2015/12/31 storming report list)  

**Build up information**  
The project only uses HTML/CSS/Javascript. Python was used for data training and transforming, however, the results are printed out and pasted to a javascrpt file to be able to access easier for javascript further calculation.  

**Test**  
The App is test in Chrome, Firefox and Safari. The Geolocation function which request the browser's location has to be ran on a local/real server on Chrome to be able to functioning since Chrome seems to block something.  

**Additional information**  
The decision tree prediction method might not be super well defined, and the dataset for training is probably not big enough for getting a super good result sometimes. Opendata sets data processing, especially the weather data, need to be well understood and defined if to be used in practical application development.  
  
The mendatory data set climate online data only contains old data, which is not a very good idea to be used in this case to fit the goal of this application -- find fresh vegetables. Though weather data will influence the freshness of vegetables, it could be combined with seasonal data -- according to vegetables' growing seasons. Since in general, a perticular outlier weather condition is very less likely to appear in a certain season (say snowing in August), weather data in this case could be omit to my personal opinion...  
  
The goal of this project, finding fresh and cheap vegetables, is actually very vague due to the definition of freshness. Nowadays, most of the vegetables can be grown in greenhouses and can get on markets all seasons, so freshness.... is just very hard to define. If to follow the old traditions, we won't be able to get anything other than potatos and stuff in winter.... If freshness have to be defined, it should have something to do with the store's stocking time, and how well they keep their products (for example, if they water them, under what temperature, etc.). However, most stores won't release these information online (not necessary, every store have their own expert; or for small stores, they just keep things based on common sense), unless one find a job at like Walmart, but even then, they use machine to control everything.... Even there is a way to access all ussful information, we are going to need an expert in biology to tell us what exactly will a condition affect the freshness of vegetables...

**^ Please ignore all my random imaginations and complains unless you also go after the reasonings behind things like a mad scientist...**  

I will thank my boyfriend Jason Macnak, a former Purdue graduate and a software engineer at Google, for all the mental supports during this project, as well as teaching me all the basics of programming languages patiently for the past couple months...  

**Contact**  
For questions about this project please feel free to contact Xiaonan Jing (jing@purdue.edu)  
