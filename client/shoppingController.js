app.controller('ShoppingController',['$http','ComicService', function($http, ComicService){
  var svm = this;
  // svm.message = "this is where information for shopping list will go."
  // svm.comicEntry = {};
  // svm.comicEntries = [];
  svm.comicEntry = ComicService.comicEntry;
  svm.comicEntries = ComicService.comicEntries;

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

svm.purchaseValue = function(){

  $http.put('/comics/purchased')
};

  // svm.makeEntry = function(){
  //   if (!svm.comicEntry.name){
  //     $http.post('/comics/submitComic', svm.comicEntry).then(function(response){
  //       svm.comicEntry.purchased === false;
  //       svm.comicEntry.alreadyRead === false;
  //       console.log(response);
  //       svm.comicEntry = {};
  //       svm.getAll();
  //     });
  //   } else {
  //     $http.put('/comics/addIssue', svm.comicEntry).then(function(response){
  //
  //     })
  //   }
  // };

  svm.getAll();


}]);//close controller
