var router = require('express').Router();
var path = require('path');
var passport = require('passport');
var User = require('../../models/user.js');
var comicRouter = require('./comic.js');


router.use('/comics', comicRouter);


router.get('/', function(request, response){
  console.log('User', request.user);
  console.log('Is authenticated', request.isAuthenticated());
  response.sendFile(path.join(__dirname, '../public/views/login.html'));
});

router.post('/', passport.authenticate('local', {
  successRedirect:'/success',
  failureRedirect:'/'
}));

router.get('/register', function(request, response){
  response.sendFile(path.join(__dirname, '../public/views/register.html'));
});

router.post('/register', function(request, response){
  console.log(request.body);
  User.create(request.body, function(err){
    if(err) {
      console.log('Error creating User');
      response.sendStatus(500);
    } else {
      response.sendFile(path.join(__dirname, '../public/views/login.html'));
    }
  })
});

router.get('/logout', function(request, response){
  console.log('logging out');
  request.logout();
  response.redirect('/');
})





module.exports = router;
