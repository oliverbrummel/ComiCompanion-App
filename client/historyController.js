app.controller('HistoryController',['$http', 'ComicService', function($http, ComicService){
  var hvm = this;

  hvm.comicEntry = ComicService.comicEntry;
  hvm.comicEntries = ComicService.comicEntries;

  hvm.readItems = ComicService.readItems;

  hvm.getAll = function(){
    $http.get('/history/rated').then(function(response){
      console.log(response.data);
      hvm.comicEntries = response.data;
    });
  };

  hvm.getAll();

}]);//close controller
