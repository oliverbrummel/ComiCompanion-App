console.log('hello from client.js');
var app = angular.module('comicApp', ['ngRoute']);


app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
  $routeProvider
    .when('/shopping', {
      templateUrl: 'views/shopping.html',
      controller: 'ShoppingController',
      controllerAs: 'shopping'
    })
    .when('/reading', {
      templateUrl: 'views/reading.html',
      controller: 'ReadingController',
      controllerAs: 'reading'

    })
    .when('/history', {
      templateUrl: 'views/history.html',
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

app.controller('ShoppingController',['$http', function($http){
  var svm = this;
  svm.message = "this is where information for shopping list will go."
  svm.comicEntry = {};
  svm.comicEntries = [];

  svm.getAll = function(){
    $http.get('/comics/all').then(function(response){
      console.log(response.data);
      svm.comicEntries = response.data;
    });
  };

  svm.makeEntry = function(){
    $http.post('/comics/submitComic', svm.comicEntry).then(function(response){
      svm.comicEntry.purchased === false;
      svm.comicEntry.alreadyRead === false;
      console.log(response);
      svm.comicEntry = {};
      svm.getAll();
    });
  };

  svm.getAll();


}]);//close controller

app.controller('ReadingController', function(){

});//close controller

app.controller('HistoryController', function(){

});//close controller
