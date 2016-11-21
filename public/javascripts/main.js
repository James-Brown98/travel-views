var addMarker = require('../../db/db').addMarker
var googleMapsLoader = require('google-maps')

GoogleMapsLoader.load(function(google) {
    function initMap() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                var pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                var map = new google.maps.Map(document.getElementById('map'), {
                    center: {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    },
                    zoom: 6
                });
                var infoWindow = new google.maps.InfoWindow({
                    map: map
                });
                google.maps.event.addListener(map, 'click', function(event) {
                  // console.log(event.latLng.lng(Scopes));
                    placeMarker(event.latLng);;
                });


                function placeMarker(location) {
                    var marker = new google.maps.Marker({
                        position: location,
                        map: map
                    });
                    marker.addListener('click', function (event) {
                      var latitude = event.latLng.lat();
                      var longitude = event.latLng.lng();

                      //get location and then add those coords to database
                      // addMarker(lat,lng)
                      console.log( latitude + ', ' + longitude );
                    })
                }
                infoWindow.setPosition(pos);
                infoWindow.setContent('Location found.');
                map.setCenter(pos);
            }, function() {
                handleLocationError(true, infoWindow, map.getCenter());
            });
        } else {
            // Browser doesn't support Geolocation
            handleLocationError(false, infoWindow, map.getCenter());
        }
    }
    function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
            'Error: The Geolocation service failed.' :
            'Error: Your browser doesn\'t support geolocation.');
    }
});
{/* <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAEJ-69rYDzgWNL1toyOOoMSPEiOjSWebk&callback=initMap">
</script> */}
