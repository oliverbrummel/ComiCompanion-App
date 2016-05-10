app.controller('ReadingController',['$http', 'ComicService', function($http, ComicService){
  var rvm = this;

  rvm.comicEntry = ComicService.comicEntry;
  rvm.comicEntries = ComicService.comicEntries;

  rvm.readItems = ComicService.readItems;

  rvm.getAll = function(){
    $http.get('/reading/purchased').then(function(response){
      console.log(response.data);
      rvm.comicEntries = response.data;
    });
  };

  rvm.doneReading = function(comic){
    console.log('clicked doneReading()');
    $http.put('/reading/changeToRead', comic).then(function(response){
      console.log(response);
      rvm.readItems.push(response.data);
      rvm.getAll();
    })
    console.log('readItems list:', rvm.readItems);
  };



  rvm.getAll();
}]);//close controller
