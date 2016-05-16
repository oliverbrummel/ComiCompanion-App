var app = angular.module('comicApp', ['ngRoute', 'angularMoment']);


app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
  $routeProvider
    .when('/shopping', {
      templateUrl: 'views/partials/shopping.html',
      controller: 'ShoppingController',
      controllerAs: 'shopping'
    })
    .when('/reading', {
      templateUrl: 'views/partials/reading.html',
      controller: 'ReadingController',
      controllerAs: 'reading'

    })
    .when('/history', {
      templateUrl: 'views/partials/history.html',
      controller: 'HistoryController',
      controllerAs: 'history'

    })

  $locationProvider.html5Mode(true);

}]);

//filter keeps duplicates from showing up in ng-repeat select item
app.filter('unique', function(){
  return function(collection, keyname){
    var output = [],
      keys = [];

    angular.forEach(collection, function(item){
      var key = item[keyname];
      if(keys.indexOf(key) === -1){
        keys.push(key);
        output.push(item);
      }
    });
    return output;
  };
});//close app.filter
