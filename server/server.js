var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');
//[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[ LOCAL ROUTES ]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
var indexRouter = require('./routes/index.js');
var comicRouter = require('./routes/comic.js');


//[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[ MONGODB ]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
var MongoDB = mongoose.connect('mongodb://localhost/comic_entries').connection;

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

app.use('/', indexRouter);
app.use('/comics', comicRouter);

app.get('/*', function(request, response){
  response.sendFile(path.join(__dirname, './public/views/index.html'));//this was changed from login.html for testing purposes
});





var server= app.listen(process.env.PORT || 3000, function(){
  var port = server.address().port;
  console.log('Listening on port:', port + ". Press ctrl-c to end.");
});
