app.factory('ComicService', function(){
  var comicEntry = {};
  var comicEntries = [];
  var userName = '';
  var checkedItems = [];
  var readItems = [];
  var selectionOptions = [];


  return {
    comicEntry: comicEntry,
    comicEntries: comicEntries,
    userName: userName,
    checkedItems: checkedItems,
    readItems : readItems,
    selectionOptions: selectionOptions
  }
})
