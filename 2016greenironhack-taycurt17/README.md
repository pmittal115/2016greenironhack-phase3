# 2016greenironhack-taycurt17

Purdue Iron Hack Fresh Vegetables Application

1. Keywords: Fresh, Vegetables, Farmers, Market, Climate

2. Description of the datasets and function design: I have not yet determined what datasets or functions I will need, I am still in the design phase.

3. Brief Description

Fill in the structued description:

Map View:

I plan to have the map along with markers for the locations, labels, and an InfoWindow. I don't know if I will incluse any covers on the map at this time.

Data Visualization:

[N] [describe] Use Graph? What is the type? (bar chart, pie chart, radar chart ...)
Although I do not have it implemented right now, I want to have a Freshness Scale which will show the user how fresh the vegetables are on a scale of 1-10. I also want to have a clock which will show the time.

[N] [List] Any interaction available on the graph? List them (enable click on numbers, drag on lines, change time/variables ...)
Although I do not have it implemented right now, this is what I want to accomplish: Interaction Form: I want to have a clock in which the user can click on it and drag it to a time, then it will show the user if the market will be open or closed at that time. I have included in my picture what I want the Freshness Scale to look like, a long line with a marker that can be moved back and forth.

[Y] [List] Any information output? list them. (text field, text area, label, plain HTML ...)
I currently have a homepage with a title, description, and a button that takes the user to the map view.

[Y] [List] Any operation option (filters)? List them. (search markets, search vegetables, filter based on price, sort based on convenience ...)
Right now I only have a search button that takes the user to the map view. Eventually, I want to have: Search markets, search vegetables, filter on price, filter on times open/closed, which market is closest.

[Y/N] [List] Any information input? List them. (comments, markers, user preference ...)
Not sure yet.

[Y] [List] Interaction with Map? List them. (filter on price will affect map markers, sort on price will affect map markers, ...)
Right now the user can move around the map.

[N] [List] Interaction with data visualization? List them. (filter, sort, set variables ...)
Not yet.

3. Build Case How can we build and access your project on a Linux/Unix machine if you use external dependencies besides HTML/CSS/Javascript? List the dependencies you used, such as python, node.js, etc. List the steps we should follow to build the project. Your project will be built on Amazon Web Service, EC2, ubuntu 14.01 instance

You can simply run my .html files


4. Test Case Which browsers did you test your project on? Chrome, IE, Edge, Safari, or Firefox?

None so far

Additional information You Want to Share with Us E.g. any problems you faced/fixed, where you reached out to for help, etc.
- I have been trying many different things to implement the data sets, but I cannot seem to find the right way to do it yet. I have added several markers of local markets, but I cannot seem to figure out how to make the click function on them work to show the name. I also added a temporary weather prediction in the side panel, I hope to soon have that be accurate.
