# FFF(Find Fresh Food)
## Introduction
This is a application which help people find fresh food in Greater Lafayette area.

## Author
* Name: Xuefeng Luo
* Email: hakunamatatahenry@gmail.com

## Key Words
Convenient, Fresh, Saving

## Datasets
* "Online Climate Data" http://www.ncdc.noaa.gov/cdo-web/webservices These publicly accessible web services allow users to have programmatic access to NCEI data and use custom and standard implementations such as OGC GIS Web Services (WMS, WFS, WCS) and OPeNDAP. Some services allow users to download data in a variety of formats such as CSV, XML, Shapefile, KMZ, and NetCDF.

* "Local Food Directories: National Farmers Market Directory" https://www.ams.usda.gov/local-food-directories/farmersmarkets The Farmers Market Directory lists markets that feature two or more farm vendors selling agricultural products directly to customers at a common, recurrent physical location. Maintained by the Agricultural Marketing Service, the Directory is designed to provide customers with convenient access to information about farmers market listings to include: market locations, directions, operating times, product offerings, accepted forms of payment, and more.

## Description
* Map View:
	1. Basic Map with specific location is located in west lafayette
	2. Markers are for markets' names
	3. Markets are labeled with names
	4. Detailed information are showed in side window

* Table View:
	1. Markets are list in table with name address, distance, etc.
	2. User can sort table by click the title
	3. Details show in the side window by clicking details

* Product View:
	1. Products details show in product tab

* Interaction Form:
	1. people are able to search market by zip code

## Build Case
All external sources including Javasripts, CSSs and APIs are list here.
* Javascript
	1. D3
	2. JQuery
	3. Bootstrap

* CSS
	1. Bootstrap
	2. Google fonts
	3. D3

* API
 	1. Google Map
 	2. Yahoo Weather
 	4. Local Food Directories: National Farmers Market Directory

## Test Case
	1. Chrome
	2. Opera

## File Structure
* index.html
* css
	* bootstrap.css
	* map.css
	* radar.css
* js
	* apiRequest.js
	* map.js
	* init.js
	* bootstrap.js
	* radarChart.js