var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Boilerplate App listening on port 3000!');
});

//
// error handling
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

//
// nothing else to do (not necessarily an error)...
app.use(function(req, res, next) {
  res.status(404).send('Sorry cant find that!');
});
