var express = require('express');
var session = require('express-session');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');
var passport = require('passport');
var localStrategy = require('passport-local').Strategy;
//[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[ LOCAL ROUTES ]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
var indexRouter = require('./routes/index.js');
var comicRouter = require('./routes/comic.js');

var User = require('../models/user.js');

//[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[ MONGODB ]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
var mongoURI = 'mongodb://localhost/comic_entries';
var MongoDB = mongoose.connect(mongoURI).connection;

MongoDB.on('error', function(err){
  console.log('MongoDB connection error', err);
});
MongoDB.once('open', function(){
  console.log('MongoDB connection open');
});

//[[[[[[[[[[[[[[[[[[[[[[[[[[[[[ EXPRESS]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('server/public'));

//[[[[[[[[[[[[[[[[[[[[[[[[ EXPRESS-SESSION ]]]]]]]]]]]]]]]]]]]]]]]]
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: false,
  cookie: {maxAge: 600000, secure: false}
}));

app.use(passport.initialize());
app.use(passport.session());

//[[[[[[[[[[[[[[[[[[[[[[[[[[ PASSPORT ]]]]]]]]]]]]]]]]]]]]]]]]]]
passport.use('local', new localStrategy({
  passReqToCallback: true,
  usernameField: 'username'
},
  function(request, username, password, done){
    console.log('CHECKING PASSWORD');

    User.findOne({username: username}, function(err, user){
      if(err) {
        console.log(err);
      }
      if(!user) {
        return done(null, false, {message: 'Incorrect username or password'});
      }

      user.comparePassword(password, function(err, isMatch){
        if(err){
          console.log(err);
        }
        if(isMatch){
          return done(null, user)
        } else {
          return done(null, false, {message: 'Incorrect username or password'});
        }
      });

    });
  }
));//close passport.use

passport.serializeUser(function(user, done){
  console.log('hit serializeUser');
  done(null, user.id);//trail of breadcrumbs back to user
});

passport.deserializeUser(function(id, done){
  console.log('hit deserializeUser');
  User.findById(id, function(err, user){
    if(err) {
      done(err);
    } else {
      done(null, user);
    }
  });
});





app.use('/', indexRouter);
app.use('/comics', comicRouter);

//catchall request
app.get('/*', function(request, response){
  response.sendFile(path.join(__dirname, './public/views/index.html'));//this was changed from login.html for testing purposes
});





var server= app.listen(process.env.PORT || 3000, function(){
  var port = server.address().port;
  console.log('Listening on port:', port + ". Press ctrl-c to end.");
});
