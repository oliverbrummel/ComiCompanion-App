app.controller('ShoppingController',['$http','ComicService', function($http, ComicService){
  var svm = this;

  svm.comicEntry = ComicService.comicEntry;
  svm.comicEntries = ComicService.comicEntries;

  svm.selectionOptions = ComicService.selectionOptions;
  svm.checkedItems = ComicService.checkedItems;

  svm.getAll = function(){
    $http.get('/shopping/unpurchased').then(function(response){
      // console.log(response.data);
      svm.comicEntries = response.data;
    });
    $http.get('/shopping/all').then(function(response){
      svm.selectionOptions = response.data;
    });
  };

  svm.makeEntry = function(){
    $http.post('/shopping/submitComic', svm.comicEntry).then(function(response){
      svm.comicEntry.purchased === false;
      svm.comicEntry.alreadyRead === false;
      console.log(response);
      svm.comicEntry = {};
      svm.getAll();
    });
  };

  svm.purchaseValue = function(){
    console.log('clicked');
    console.log(svm.getAllChecked());
    $http.put('/shopping/markComicsPurchased', svm.checkedItems).then(function(response){
      console.log(response);
      svm.getAll();
    });
  };

  svm.getAllChecked = function(){
    var checkedItems = [];
    for (var it = 0; it < svm.comicEntries.length; it++){
      if (svm.comicEntries[it].purchased) {
        svm.checkedItems.push(svm.comicEntries[it]);
      }
    }
    return svm.checkedItems;
  };



  svm.getAll();


}]);//close controller
