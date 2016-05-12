var router = require('express').Router();
var path = require('path');
var Comic = require('../../models/comic.js').model;
var User = require('../../models/user.js');

router.get('/rated', function(request, response){
  // Comic.find({userId: request.user._id, alreadyRead: true}, function(err, comics){
  Comic.aggregate({$match: {userId: request.user._id, alreadyRead: true}},
                  {$group: {_id: "$name", lowestIssue: {$min: "$issue"}, highestIssue: {$max: "$issue"}}},
     function(err, comics){
       if(err) {
        console.log(err);
        response.sendStatus(500);
       } else {
        response.send(comics);
       }
     });
});






module.exports = router;
