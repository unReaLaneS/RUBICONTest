angular.module("myApp")
    .controller("tvShowsCtrl", function($scope, $http, $rootScope) {
        $http.get("https://api.themoviedb.org/3/tv/top_rated?api_key=e00f28bf6d195ed33ac2ee4fae336d85&language=en-US&page=1")
            .then(function(response) {
                $scope.tv = response.data;
            }, function(response) {
                $scope.error = "Something went wrong";
            });

        $rootScope.searchFunc = function () {
            if ($rootScope.search.length >= 3) {
                $http.get("https://api.themoviedb.org/3/search/tv?api_key=e00f28bf6d195ed33ac2ee4fae336d85&query=" + $rootScope.search)
                    .then(function (response) {
                        $scope.tv = {};

                        $scope.tv = response.data;

                    }, function (response) {
                        $scope.error = "Something went wrong";
                    });
            }
        };

        $rootScope.update = function() {
            $http.get("https://api.themoviedb.org/3/tv/top_rated?api_key=e00f28bf6d195ed33ac2ee4fae336d85&language=en-US&page=1")
                .then(function(response) {
                    console.log(response);
                    $scope.tv =  response.data;
                }, function(response) {
                    $scope.error =  "Something went wrong";
                });
        };
    });