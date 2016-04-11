Readme Introduction - IronHack Application

    1.Name of the application - CityFresh

    2.Keywords: Fresh produce, cheap local produce, near neighborhood

    3.Datasets and function design

    a.  Climate Data Online [http://catalog.data.gov/dataset/climate-data-online-cdo] in json or csv format. 
    b.  YES, the primary dataset “online climate data” is from data.gov.
    c.  YES, all these datasets are coming from data.gov.


    4.Brief Description:

This application is designed to help residents of an area to buy seasonal vegetables from the local markets at a reasonably     inexpensive price. The variance in the price of fresh food products is largely determined by the climate in that area. A conducive weather involves a larger produce and less transportation costs to the markets from the field. On the other hand, a bad climate can mean lesser produce with higher transportation costs. I have tried to extract climate data from local government sites which gives an idea about the climate of a particular place. Then using this data, the application finds the places where a particular seasonal produce is cheaper than other places nearby thereby enabling the consumers to buy fresh produce at a comparatively lower rate.


    Structued description:

o Map View:

    a.	Basic Map with specific location (map is located in a meaningful place (for example Chicago)) - YES
    b.	Markers for location of markets - YES
    c.	Labels for markets' names - YES
    d.	InfoWindow to show detail information of a market - YES
    e.	Any other cover on the map (for example, cloud cover to show the weather effect) - NO (to be considered as an enhancement) 

o Data Visualization:

    a.	YES, I will use graphs like bar chart or pie chart to show comparison among categories and to illustrate numerical proportion. 
    b.	Interaction available on the graph - NO (to be considered as an enhancement)

o Interaction Form:

    a.	Information output will be in text field, text area, label, plain HTML - YES.
    b.	Operation option (filters) would be search markets, search vegetables, filter based on price - YES.
    c.	Information input - comments, user preference - YES (as an enhancement).
    d.	Interaction with Map- filter on price will affect map markers, sort on price will affect map markers - YES.
    e.	Interaction with data visualization – filter like time and place- YES.

    5. Build Case - I have initially started with HTML and Javascript and might consider using other technologies as I proceed.

    6. I will be testing the application on Google Chrome.

Basic Proposed Pseudocode:

1. Gather info about locality and food product (by taking inputs from the user in an HTML page and list of food products will be          provided to the user in a dropdown menu).
2. Send this information to the REST web service and get response about climate as JSON data.
3. Utilize this JSON data response to gather information about food products and their price in different markets (hopefully using        web service - still working on this part)
4. Plot the stores in the locality on a map with a label indicating the price of the product.


