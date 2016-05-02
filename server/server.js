var express = require('express');

var loginRouter = require('./routes/index.js');

var app = express();



app.use(express.static('server/public'));
app.use('/', loginRouter);





var server= app.listen(process.env.PORT || 3000, function(){
  var port = server.address().port;
  console.log('Listening on port:', port + ". Press ctrl-c to end.");
});
