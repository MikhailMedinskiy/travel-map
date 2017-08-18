;(function ($) {
    // Scripts that will only run once the page Document Object Model (DOM) is ready for JavaScript code to execute.
    $(document).ready(function () {

    });

    // Scripts that will run after the whole page is loaded (images, videos, iframes. etc)
    $(window).on('load', function () {

      var mapContainer = $('#map')[0];


      var directionsService = new google.maps.DirectionsService;
      var directionsDisplay = new google.maps.DirectionsRenderer;

      var odessaLatLng = {lat: 46.4742893, lng: 30.7348775};
      var map = new google.maps.Map(mapContainer, {
        center: odessaLatLng,
        zoom: 15
      });

      directionsDisplay.setMap(map);

      

        var onChangeHandler = function(e) {
          e.preventDefault();
          calculateAndDisplayRoute(directionsService, directionsDisplay);
        };

      $('form').on('submit', onChangeHandler)

      function calculateAndDisplayRoute(directionsService, directionsDisplay) {
        directionsService.route({
          origin: document.getElementById('start').value,
          destination: document.getElementById('end').value,
          travelMode: 'DRIVING'
        }, function(response, status) {
          if (status === 'OK') {
            directionsDisplay.setDirections(response);
          } else {
            window.alert('Directions request failed due to ' + status);
          }
        });
      }

    });

    

    // Scripts that will run on window resize
    $(window).on('resize', function () {

    });
})(jQuery);
