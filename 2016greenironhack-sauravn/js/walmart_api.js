var helloApp = angular.module('myApp', []); 

var apiKey = 'x6c5uajw6f37v24zt3hs7s7n'; 
helloApp.controller("myCtrl",  function ($scope, $http) {
	$http.defaults.headers.put = {
		'Access-Control-Allow-Origin' : '*', 
		'Access-Control-Allow-Methods' : 'POST, GET', 
		'Access-Control-Allow-Credentials': true, 
		'Content-Type' : 'application/json', 
		'Accept' : 'application/json'
	}; 
	$http.defaults.useXDomain = true; 
	delete $http.defaults.headers.common['X-Requested-With']; 

	//This works with the Value of the Day API 
    $http.get('https://api.walmartlabs.com/v1/vod?format=json&apiKey=' + apiKey).
        success(function(data) {
            $scope.valueOfDay = data;

            var data = {
            	"images" : [{ "largeImg" : $scope.valueOfDay.largeImage }]
            }; 
            data.images.forEach(function(obj){
            	var img = new Image(); 
            	img.src = obj.largeImg; 
            	img.setAttribute("class", "valueImage"); 
            	document.getElementById("img-container").appendChild(img); 
            });
            //console.log(greeting); 
        });	
        
     //This works with the Trending API  
     $http.get('http://api.walmartlabs.com/v1/trends?format=json&apiKey=' + apiKey). 
     	success(function(data){
     		$scope.trending = data; 
     		/*
     		for (val = 1; val < $scope.trending.length; val++){

     		}
			*/
     	}); 
		
	// This is for fetching vegetable products
	 $http.get('http://api.walmartlabs.com/v1/items?ids=10449951,47769900&apiKey=x6c5uajw6f37v24zt3hs7s7n' + apiKey).
        success(function(data) {
            document.getElementById("price_comparison").innerHTML = sucess;
 });	
        
 
});

