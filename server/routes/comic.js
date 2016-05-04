var router = require('express').Router();
var path = require('path');
var Comic = require('../../models/comic.js');

router.post('/submitComic', function(request, response){
  console.log('requested with a body of:', request.body);
  var newComic = new Comic (request.body);

  newComic.save(function(err){
    if(err) {
      console.log(err);
      response.sendStatus(500);
    } else {
      console.log('entry saved!');
      response.sendStatus(200);
    }
  });
});//closes router.post

router.get('/all', function(request, response){
  Comic.find({}, function(err, comics){
    if(err) {
      console.log(err);
      response.sendStatus(500);
    } else {
      response.send(comics);
    }
  });
});


module.exports = router;
