# 2016greenironhack-shiboo18
Readme 
1. **Name of the Application** – Quickkyyy Health  
2. **Keywords** - freshness, price, transportation convenience  
3. **Description of the datasets and function design**  
..a.  **[ERS USDA Dataset][    http://www.ers.usda.gov/data-products/vegetables-and-pulses-data/by-category.aspx/]    [Category, ...Vegetable, Price]** 
...This dataset will list the prices of    vegetables during a following month. Will help in determining the tip    of the month i.e.; ...which vegetable is cheapest and fresh in the given    week/month   
..b.  **[National Farmers Market Directory] [    http://catalog.data.gov/dataset/national-farmers-market-directory/]    [Marketplace, ...City, State, Products Available, Winter Market]**   
...This    dataset will list all the details regarding Farmers Market in West    Lafayette   
..c.  [Y] I use the primary dataset” online climate data” from    data.gov   
..d. **[Online Climate Data] [    http://catalog.data.gov/dataset/climate-data-online-cdo] [Mean    Monthly temperature]**   
...This will list the mean temperature of the    month and based on that we can provide a coverage to the map. Light colors if weather ...is good and dark colors if weather is bad. The tone    of the colors will be translucent. • [N] All these datasets are not    from ...data.gov- In order to get price of the products and location of    Walmart stores, I will be using their product API and store ...locator API. Please find below the link to their API:   
....*https://developer.walmartlabs.com/docs/read/Search_API  
....*https://developer.walmartlabs.com/API_Terms_of_Use  
....*https://developer.walmartlabs.com/docs/read/Home  
....*https://developer.walmartlabs.com/docs/read/Store_Locator_API  
4. **Brief Description**   
The aim of this website is to help customers locate the nearest store where the freshest and healthiest food is available at any time of the day.   
The User Interface will be a single web page which will be divided into following parts with following components:  
..1.	Header Section     
...a. Top left hand corner – Name of the website    
...b. Top right hand corner – Search Text box – The user can search where   vegetable/food items are available    
..2.	Detail Section – It is divided into two parts:   
...a. Left Hand section which is almost 70% of the screen size will hold the map – The following things will be marked on the map – .....your location, nearby Walmart and farmer markets listed.  
...b. Right Hand Section which is rest of the 30% of the screen – When we click on a store/market. It will show the details of the .....store. It will show the timings and whether the store is open. It will have a graph which will show the individual rating of the place based on freshness of the products, distance, transportation and price.  
..3.	 Footer section  
...a. It will show the "Tip of the Month" – what is the best product to buy based on freshness and price. This will be determined ...based on what products are produced during the given weather and what is their price in market.  
**Fill in the structured description:**  
 **Map View**:	  
• [Y] Basic Map for the city of West Lafayette  
• [Y] Markers for location of markets  
• [Y] Labels for markets' names  
• [Y] InfoWindow to show detail information of a market  
• [Y] Based on the temperature and expected thunderstorms/snowstorms the map will be shown in various translucent colors  
**Data Visualization**:  
• [Y] I will be using a Bar chart to show the rating of individual categories including freshness, distance, price, timing etc  
• [Y] Interaction with the graph –  
o When user will click on the bar it will show the rating in percentage.  
 **Interaction Form**:  
• [Y] Information output –  
o Info Window which shows details about the store  
• [Y] operation option (filters) –  
o Search based on vegetable  
o Sort based on distance   
• [Y] Interaction with Map:  
o Search based on vegetable will affect map markers  
5. **Build Case**   
*Will update information in next phase*.  
How can we build and access your project on a Linux/Unix machine if you use external dependencies besides HTML/CSS/Javascript? List the dependencies you used, such as python, node.js, etc. List the steps we should follow to build the project. Your project will be built on Amazon Web Service, EC2, ubuntu 14.01 instance  
6. **Test Case**  
I will be testing my project on Google Chrome – latest version at the time of completion of the hackathon  
7. **Additional information**  
I am going to use bootstrap to develop the UI of the page. I am exploring other JS libraries to determine which will suit the project best.  
