app.factory('ComicService', function(){
  var comicEntry = {};
  var comicEntries = [];
  var userName = '';
  var checkedItems = [];
  var readItems = [];
  var selectionOptions = [];

  // var stars = [1,2,3,4,5];


  return {
    comicEntry: comicEntry,
    comicEntries: comicEntries,
    userName: userName,
    checkedItems: checkedItems,
    readItems : readItems,
    selectionOptions: selectionOptions
  }
})
