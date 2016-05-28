var app=angular.module('myApp', []);
  app.factory('myFact', function() {
    return {
       name:'Default',
       lname:'Default'
    }
  });
  app.controller('firstCtrl', function($scope,myFact) {
    $scope.name = myFact.name;
  });
  app.controller('secondCtrl', function($scope,myFact) {
    $scope.lname = myFact.lname;
  });
