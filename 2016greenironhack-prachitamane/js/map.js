 function initMap() {
        var mapDiv = document.getElementById('map');
        var map = new google.maps.Map(mapDiv, {
          center: {lat: 40.4050411, lng: -86.8932353},
          zoom: 12
        });
        init(map);
      }