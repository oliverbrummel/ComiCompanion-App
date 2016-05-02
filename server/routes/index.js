var router = require('express').Router();
var path = require('path');


router.get('/', function(request, response){
  response.sendFile(path.join(__dirname, '../public/views/login.html'));
})







module.exports = router;
