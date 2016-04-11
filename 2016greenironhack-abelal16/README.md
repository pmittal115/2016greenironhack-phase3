# 2016greenironhack-abelal16
Name of your Application - Cheap & Fresh Veggies in Lafayette

Keywords - local vegetables, cheap vegetables, fresh vegetables, best local produce

Description of the datasets and function design

The dataset that we have to use is Climate Data Online found at http://catalog.data.gov/dataset/climate-data-online-cdo
I'm still exploring this dataset to see what columns are useful for the application.However, I can see that there are multiple formats in which we can get the data (e.g - csv format or text format) and I'm expecting to get the data about the following variables:
temperature, humidity, wind, clouds, visibility, weather - The critical data points could be a rainy or snowy weather time when it won't be a good idea for the consumer to go out and fetch vegetables.

Another dataset that we have to include in order to get the local produce data is Farmer's market data for West Lafayette which can be obtained at http://catalog.data.gov/dataset/
This dataset will help us keep track of the time when these local markets are open, along with their location.

In addition to the above two datasets, I will explore datasets to get data for the local stores in order to compare the prices of vegetables and help in the decision-making.I'm exploring this dataset currently.
I will explore the visualization libraries. For now, I'm thinking of using  D3 library at http://d3js.org/ which is a library to create interactive graphs. This will help consumers get a clear result visually.

Do you use the primary dataset ”online climate data” from data.gov? Y


Project Description
Using the aformentioned datasets and external libraries, I'm planning to provide a web-based solution. In the application, I will have user enter his location (address) to calculate the distance to the farmer market. On entering his address, he will see a map with the markets appearing as markers.
There will be options where user can select if he wants the market information sorted by prices, freshness or both price & freshness
In order to calculate price, the distance cost gets included in the price of vegetables to give us an effective price and sorting will be based on comparison with each other in the farmers' market and local stores.
For freshness, we will rely on customer's ratings for freshness. I'm also exploring other factors to consider for freshness, for example, data from framer's market.
In order to use both price and freshness, we will use a weighted value and I'm exploring the process of assigning weights to each feature.
I may just design considering both price and freshness along with other factors and do away with the separate ones to get a holistic approach.

Map View:
Y Basic Map with specific location (your map is located in a meaningful place, city of west lafayette for example)
Y Markers for location of markets
Y Labels for markets' names
Y InfoWindow to show detail information of a market
N Any other cover on the map (for example, cloud cover to show the weather effect)

Data Visualization:
Use Graph? What is the type? (bar chart, pie chart, radar chart ...)
Yes, I'm planning to use bar chart as it's visually appealing

Any interaction available on the graph? List them (enable click on numbers, drag on lines, change time/variables ...)
Yes, click on bars to show their exact value.

Interaction Form:
Any information output? list them.
A list of markets will be returned when user queries based on his preference (price, freshness, or both). This information will also have the availability time listed.
In addition when user clicks on any of the markers in the map, it will display market's information, along with scores.


Any operation option (filters)? List them. (search markets, search vegetables, filter based on price, sort based on convenience ...)
sort based on price, sort based on freshness, sort based on both price and freshness

Any information input? List them. (comments, markers, user preference ...)
Markers (featuring markets) will be provided on the map initially based on the distance from user's location

Interaction with Map? List them. (filter on price will affect map markers, sort on price will affect map markers, ...)
In addition to a list of markets returned after user queries based on price or freshness or both, the markers will also change with numbers depicting the ranking based on user's selection.

Interaction with data visualization? List them. (filter, sort, set variables ...)
No

Build Case How can we build and access your project on a Linux/Unix machine if you use external dependencies besides HTML/CSS/Javascript? List the dependencies you used, such as python, node.js, etc. List the steps we should follow to build the project. Your project will be built on Amazon Web Service, EC2, ubuntu 14.01 instance
I am still exploring the initial steps in the development. I will figure out these and update the readme file.

Test Case Which browsers did you test your project on? Chrome, IE, Edge, Safari, or Firefox? Chrome

Additional information You Want to Share with Us E.g. any problems you faced/fixed, where you reached out to for help, etc.
I am new to Javascript and web development. So one of the issues is not knowing the syntax and libraries beforehand. But there are good links posted on ironhack website and I'm undergoing the tutorials to learn about the 
different technologies.
