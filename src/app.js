var express = require('express');
var app = express();
var addOne = require('./modules/addOne');

// GET
// /addOne/8
app.get('/addOne/:number', function(req, res) {
  console.log('inside get route', req.params.number);
  // number might be a string
  var myNum = req.params.number;
  var result = addOne(myNum);
  res.status(200).send({answer: result});
});

app.listen(4567, function() {
  console.log('up on port 4567');
});
