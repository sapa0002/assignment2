var app = angular.module('demoApp' , ['ngRoute', 'ngStorage']);

app.controller('Tab1', function($scope, $route, $routeParams, $location, $localStorage) {
 $scope.list = [];
 //$localStorage.listCont= $scope.list;
    
if($localStorage.listCont){
    $localStorage.listCont= $scope.list;    
} 
    
    
      $scope.addItem = function(){
      $scope.list.push({name: $scope.listitem});
        $localStorage.listCont = $scope.list;   
      };
    
      $scope.removeItem = function(index){
        $scope.list.splice(index, 1);
        $$localStorage.listCont = $scope.list; 
      };

  });

app.controller('Tab2', function($scope, $route, $routeParams, $location, $localStorage) {
 $scope.list = [];
   $scope.listCont2=$localStorage;
    
if($scope.listCont2){
    $scope.listCont2=[];    
} 
    
    
      $scope.addItem = function(){
      $scope.list.push({name: $scope.listitem});
      $scope.listCont2 = $scope.list;   
      };
    
      $scope.removeItem = function(index){
        $scope.list.splice(index, 1);
        $scope.listCont2 = $scope.list; 
      };


   });


app.controller('Tab3', function($scope, $route, $routeParams, $location, $localStorage){
   $scope.list = [];
   $scope.listCont=$localStorage;
    
if($scope.listCont3){
    $scope.listCont3=[];    
} 
    
    
      $scope.addItem = function(){
      $scope.list.push({name: $scope.listitem});
      $scope.listCont3 = $scope.list;   
      };
    
      $scope.removeItem = function(index){
        $scope.list.splice(index, 1);
        $scope.listCont3 = $scope.list; 
      };

});
  
app.controller('MainCtrl', function($scope, $route, $routeParams, $location, $localStorage) {}); 

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