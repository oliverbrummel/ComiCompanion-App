// var router = require('express').Router();
// var path = require('path');
// var Comic = require('../../models/comic.js').model;
// var User = require('../../models/user.js');
//
// var passport = require('passport');//maybe
// var mongoose = require('mongoose');//maybe
//
//
// // router.post('/submitComic', function(request, response){
// //   console.log('requested with a body of:', request.body);
// //   var newComic = new Comic (request.body);
// //
// //   newComic.save(function(err){
// //     if(err) {
// //       console.log(err);
// //       response.sendStatus(500);
// //     } else {
// //       console.log('entry saved!');
// //       response.sendStatus(200);
// //     }
// //   });
// //
// // });//closes router.post
//
// router.post('/submitComic', function(request, response){
//   console.log('request.body:', request.body);
//   console.log('request.user:', request.user);
//   var newComic = new Comic (request.body);
//   newComic.userId = request.user._id;
//   newComic.save(function(err){
//     if(err) {
//       console.log(err);
//       response.sendStatus(500);
//     } else {
//       console.log('entry saved');
//       response.sendStatus(200);
//     }
//   });
// });
//
// router.get('/shopping', function(request, response){
//   Comic.find({userId: request.user._id, purchased: false}, function(err, comics){
//     if(err) {
//       console.log(err);
//       response.sendStatus(500);
//     } else {
//       response.send(comics);
//     }
//   });
// });
//
//
// module.exports = router;
