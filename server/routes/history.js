var router = require('express').Router();
var path = require('path');
var Comic = require('../../models/comic.js').model;
var User = require('../../models/user.js');

router.get('/rated', function(request, response){
  Comic.aggregate({$match: {userId: request.user._id, alreadyRead: true}},
                  {$group: {_id: "$name", lowestIssue: {$min: "$issue"}, highestIssue: {$max: "$issue"}, avgRating: {$avg: "$rating"}, lastReadOn: {$last: "$dateRead"}}},
     function(err, comics){
       if(err) {
        console.log(err);
        response.sendStatus(500);
       } else {
        response.send(comics);
       }
     });
});

router.delete('/delete/:id', function(request, response){
  Comic.remove({name: request.params.id}, function(err){
    if(err) {
      console.log("(if)request.params.id:", request.params.id);
      response.sendStatus(500);
    }
  })
})






module.exports = router;
