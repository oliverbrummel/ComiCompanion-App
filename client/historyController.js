app.controller('HistoryController',['$http', 'ComicService', function($http, ComicService){
  var hvm = this;

  hvm.comicEntry = ComicService.comicEntry;
  hvm.comicEntries = ComicService.comicEntries;


}]);//close controller
