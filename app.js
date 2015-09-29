var app = angular.module('demoApp' , ['ngRoute', 'ngStorage']);

app.controller('Tab1', function($scope, $route, $routeParams, $location, $localStorage) {
 $scope.list = [
        {'name': '1st list item'},
        {'name': '2nd list item'},
        {'name': '3rd list item'}
      ];
      $scope.addItem = function(){
        $scope.list.push({
          name: $scope.listitem
        });
      };
      $scope.removeItem = function(index){
        $scope.list.splice(index, 1);
      };

      $scope.loadData =  function(){
          $localStorage.list;
        };
  });

app.controller('Tab2', function($scope, $route, $routeParams, $location, $localStorage) {
 $scope.list = [
        {'name': '1st list item'},
        {'name': '2nd list item'},
        {'name': '3rd list item'}
      ];
      $scope.addItem = function(){
        $scope.list.push({
          name: $scope.listitem
        });
      };
      $scope.removeItem = function(index){
        $scope.list.splice(index, 1);
      };

      
        $scope.saveData =  function(){
          $localStorage.list;
        };


   });


app.controller('Tab3', function($scope, $route, $routeParams, $location, $localStorage){
      $scope.list = [
        {'name': '1st list item'},
        {'name': '2nd list item'},
        {'name': '3rd list item'}
      ];
      $scope.addItem = function(){
        $scope.list.push({
          name: $scope.listitem
        });
      };
      $scope.removeItem = function(index){
        $scope.list.splice(index, 1);
      };

       $scope.saveData =  function(){
          $localStorage.list;
        };


});
  
  app.controller('MainCtrl', function($scope, $route, $routeParams, $location, $localStorage) {

    $scope.list = [
        {'name': '1st list item'},
        {'name': '2nd list item'},
        {'name': '3rd list item'}
      ];
      $scope.addItem = function(){
        $scope.list.push({
          name: $scope.listitem
        });
      };
      $scope.removeItem = function(index){
        $scope.list.splice(index, 1);
      };
   }); 

 app.config(function($routeProvider, $locationProvider) {

  $routeProvider

  .when('/tab1', {
    templateUrl: 'tab1.html',
    controller:'Tab1'
  })

  .when('/tab2', {
   templateUrl: 'tab2.html',
   controller : 'Tab2'
  })

  .when('/tab3', {
    templateUrl: 'tab3.html',
    controller : 'Tab3'

  }).
  otherwise({
        redirectTo: '/'
      });
});