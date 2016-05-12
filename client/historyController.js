app.controller('HistoryController',['$http', 'ComicService', function($http, ComicService){
  var hvm = this;

  hvm.comicEntry = ComicService.comicEntry;
  hvm.comicEntries = ComicService.comicEntries;

  hvm.readItems = ComicService.readItems;

  hvm.getAll = function(){
    $http.get('/history/rated').then(function(response){
      console.log('getting all read comics');
      console.log(response.data);
      hvm.readItems = response.data;
    });
  };

  hvm.getAll();

}]);//close controller
