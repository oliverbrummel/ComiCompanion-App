var router = require('express').Router();
var path = require('path');


router.get('/', function(request, response){
  response.sendFile(path.join(__dirname, '../public/views/index.html'));//this was changed from login.html for testing purposes
})







module.exports = router;
