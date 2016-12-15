angular.module("myApp", ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/movies');

        $stateProvider
            .state('movies', {
                url: '/movies',
                templateUrl: 'movies.html',
                controller: 'moviesCtrl'
            })
            .state('tvshows', {
                url: '/tvshows',
                templateUrl: 'tvshows.html',
                controller: 'tvShowsCtrl'
            })
            .state('movieDetails', {
                url: '/movie/:id',
                templateUrl: 'moviedetails.html',
                controller: 'movieDetailsCtrl'
            })
            .state('tvDetails', {
                url: '/tv/:id',
                templateUrl: 'tvdetails.html',
                controller:'tvDetailsCtrl'
            });

    });