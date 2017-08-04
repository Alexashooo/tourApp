(function(){
      function mainMap(){

        return {
          templateUrl: '/templates/main_map.html',
          replace: true,
          restrict: 'E',
          scope:{},
          link: function(scope, element, attrs){
              var mapOptions = {
                  center: new google.maps.LatLng(-34.397, 150.644),
                  zoom: 8
              };

              var map = new google.maps.Map(document.getElementById('gmap'), mapOptions);

          }

        }
      };

  angular
      .module('tourApp')
      .directive('mainMap', mainMap);
})();
