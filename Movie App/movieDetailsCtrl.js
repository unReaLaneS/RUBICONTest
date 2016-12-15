angular.module("myApp")
    .controller("movieDetailsCtrl", function($scope, $http, $rootScope, $stateParams) {
        $http.get("https://api.themoviedb.org/3/movie/" + $stateParams.id + "?api_key=e00f28bf6d195ed33ac2ee4fae336d85&language=en-US")
            .then(function(response) {
                console.log(response);
                $rootScope.details =  response.data;
            }, function(response) {
                $rootScope.error =  "Something went wrong";
            });
    });