var router = require('express').Router();
var path = require('path');
var Comic = require('../../models/comic.js').model;
var User = require('../../models/user.js');

router.post('/submitComic', function(request, response){
  var newComic = new Comic (request.body);
  newComic.userId = request.user._id;
  newComic.save(function(err){
    if(err) {
      console.log(err);
      response.sendStatus(500);
    } else {
      console.log('entry saved');
      response.sendStatus(200);
    }
  });
});

router.get('/unpurchased', function(request, response){
  Comic.find({userId: request.user._id, purchased: false}, function(err, comics){
    if(err) {
      console.log(err);
      response.sendStatus(500);
    } else {
      response.send(comics);
    }
  });
});

router.get('/all', function(request, response){
  Comic.find({userId: request.user._id}, function(err, comics){
    if(err) {
      console.log(err);
      response.sendStatus(500);
    } else {
      response.send(comics);
    }
  });
});

router.put('/markComicsPurchased', function(request, response){
  console.log("server request.body:", request.body);

  var errorInDB = false;
  var errorReceived = '';

  for(var it = 0; it < (request.body).length; it++) {
    Comic.findByIdAndUpdate((request.body[it])._id, {$set: {purchased : true}}, function(err){
      if(err){
        console.log('IN THE ERROR BLOCK');
        errorInDB = true;
        errorReceived = err;
      }
    });
  }
  if(errorInDB){
    console.log(errorReceived);
    response.sendStatus(500)
  } else {
    response.sendStatus(200);
  }
});

module.exports = router;
