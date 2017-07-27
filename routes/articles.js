var express = require('express');
var router = express.Router();


router.post('/', function(req, res) {
  res.send();
});


router.put('/:title', function(req, res) {
  res.send();
});


router.delete('/:title', function(req, res) {
  res.send();
});

///////HTML templates:

router.get('/', function(req, res) {
  res.send();
});

router.get('/:title', function(req, res) {
  res.send();
});

router.get('/:title/edit', function(req, res) {
  res.send();
});

router.get('/new', function(req, res) {
  res.send();
});

module.exports = router;