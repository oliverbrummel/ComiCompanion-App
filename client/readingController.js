app.controller('ReadingController',['$http', 'ComicService', function($http, ComicService){
  var rvm = this;

  rvm.comicEntry = ComicService.comicEntry;
  rvm.comicEntries = ComicService.comicEntries;

  rvm.getAll = function(){
    $http.get('/comics/all').then(function(response){
      console.log(response.data);
      rvm.comicEntries = response.data;
    });
  };

  rvm.getAll();
}]);//close controller
