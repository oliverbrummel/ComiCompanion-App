var router = require('express').Router();
var path = require('path');
var Comic = require('../../models/comic.js').model;
var User = require('../../models/user.js');

router.get('/purchased', function(request, response){
  Comic.find({userId: request.user._id, purchased: true, alreadyRead: false}, function(err, comics){
    if(err) {
      console.log(err);
      response.sendStatus(500);
    } else {
      response.send(comics);
    }
  });
});

router.put('/changeToRead', function(request, response){
  Comic.findByIdAndUpdate(request.body._id, {$set: {alreadyRead: true, rating: request.body.rating, dateRead: new Date()}}, function (err, comics){
    if(err){
      console.log(err);
      response.sendStatus(500);
    } else {
      response.send(comics);
    }
  });
});






module.exports = router;
