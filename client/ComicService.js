app.factory('ComicService', function(){
  var comicEntry = {};
  var comicEntries = [];

  return {
    comicEntry: comicEntry,
    comicEntries: comicEntries
  }
})
