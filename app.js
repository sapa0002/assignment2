var app = angular.module('demoApp' , ['ngRoute', 'ngStorage']);

app.controller('Tab1', function($scope, $route, $routeParams, $location, $localStorage) {

     $scope.list= [];
 
    
if($localStorage.listCont){
    $scope.list = $localStorage.listCont;    
} else{$scope.list = [{name: "list1"}]
}
    
    
      $scope.addItem = function(){
      $scope.list.push({name: $scope.listitem});
        $localStorage.listCont = $scope.list;   
      
      };
    
    
    
      $scope.removeItem = function(index){
        $scope.list.splice(index, 1);
        $localStorage.listCont = $scope.list; 
      };

  });

app.controller('Tab2', function($scope, $route, $routeParams, $location, $localStorage) {
 $scope.list = [];
   if($localStorage.listCont2){
    $scope.list=$localStorage.listCont2;    
} else{$scope.list = [{name: "list2"}]
}
    
    
      $scope.addItem = function(){
      $scope.list.push({name: $scope.listitem});
        $localStorage.listCont2 = $scope.list;   
      };
    
      $scope.removeItem = function(index){
        $scope.list.splice(index, 1);
        $localStorage.listCont2 = $scope.list; 
      };

  });

app.controller('Tab3', function($scope, $route, $routeParams, $location, $localStorage){
   $scope.list = [];
   
    
if($localStorage.listCont3){
   $scope.list= $localStorage.listCont3;    
} else{$scope.list = [{name: "list3"}]
}
    
    
      $scope.addItem = function(){
      $scope.list.push({name: $scope.listitem});
        $localStorage.listCont3 = $scope.list;   
      };
    
      $scope.removeItem = function(index){
        $scope.list.splice(index, 1);
        $localStorage.listCont3 = $scope.list; 
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