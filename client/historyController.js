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

  hvm.deleteLog = function(comic){
    $http.delete('/history/delete/' + comic._id).then(function(response){
      console.log('comic deleted (I think)');
      response.sendStatus(200);
    });
    hvm.getAll();
  };

  hvm.editLog = function(){
    hvm.showDeleteButtons = true;
  };
  hvm.doneEditingLog = function(){
    hvm.showDeleteButtons = false;
  };

  hvm.getAll();

}]);//close controller
