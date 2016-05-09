app.factory('ComicService', function(){
  var comicEntry = {};
  var comicEntries = [];
  var userName = '';


  return {
    comicEntry: comicEntry,
    comicEntries: comicEntries,
    userName: userName
  }
})
