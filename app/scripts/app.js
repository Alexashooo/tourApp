(function(){
    function config($stateProvider, $urlRouterProvider){

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('landing', {
                url:'/',
                controller: 'LandingCtrl as landing',
                templateUrl: '/templates/landing.html'
            })

    }

    angular
        .module('tourApp', ['ui.router'])
        .config(config);
})()
