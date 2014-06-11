var app = angular.module("homeModule", []);
app.controller("homeController", function($scope, service) {
  $scope.message = "Hello, world!";
  $scope.user = {};

  service.getUser(function(data){
    $scope.user = data;
  });

});


app.factory("service", function($http){
  function getUser(callback) {
    var request = $http({
      method: "GET",
      url: "/user"
    });

    request.success(function(data){
      callback(data);
    });
  }

  return {
    getUser: getUser
  };

});
