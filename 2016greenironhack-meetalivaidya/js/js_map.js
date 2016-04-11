var map;
var myLatLng = {lat: 40.418702, lng: -86.892306};
/*var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'DOWNTOWN MARKET'
  });
*/
var farmersmarkets = {
    type: 'FeatureCollection',
    features: [{
        type: 'Feature',
        geometry: {type: 'Point', coordinates: [40.418702, -86.892306]}, //Static for now, will be obtained from dataset 
        properties: {name: 'Downtown Market'}
    }]
};
        
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 40.4259, lng: -86.9081},
          zoom: 13
        });
    var myLatLng = {lat: 40.418702, lng: -86.892306};
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Downtown Market'
    }); 
    
    var infowindow = new google.maps.InfoWindow();
    //var service = new google.maps.places.PlacesService(map);

    //service.getDetails({placeId: 'ChIJN1t_tDeuEmsRUsoyG83frY4'}, function(place, status) {
    //      if (status === google.maps.places.PlacesServiceStatus.OK) {
            //var marker = new google.maps.Marker({
              //map: map,
              //position: place.geometry.location
            //});
            google.maps.event.addListener(marker, 'click', function() {
                if (infowindow.getMap()){
                    infowindow.close(); 
                }
                else{
                infowindow.setContent('<div><strong>' + /*place.name*/'Downtown Market' + '</strong><br>' +
                    'Place ID: ' + /*place.place_id*/'Downtown Market' + '<br>' +
                /*place.formatted_address*/'Downtown Market' + '</div>');
                infowindow.open(map, this);
                }
            });
              
    //        }
    //    });
    }
           //map.data.addGeoJson(cities);

        
       
/*
$(document).ready(function () {
    var map;
    var elevator;
    var myOptions = {
        zoom: 1,
        center: new google.maps.LatLng(0, 0),
        mapTypeId: 'terrain'
    };
    map = new google.maps.Map($('#map_canvas')[0], myOptions);

    var addresses = ['Norway', 'Africa', 'Asia','North America','South America'];

    for (var x = 0; x < addresses.length; x++) {
        $.getJSON('http://maps.googleapis.com/maps/api/geocode/json?address='+addresses[x]+'&sensor=false', null, function (data) {
            var p = data.results[0].geometry.location
            var latlng = new google.maps.LatLng(p.lat, p.lng);
            new google.maps.Marker({
                position: latlng,
                map: map
            });

        });
    }

}); 
*/
    
