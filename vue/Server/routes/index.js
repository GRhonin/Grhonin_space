var express = require('express');
var query = require('../utils/dbHelper.js');
var router = express.Router();

/* GET home page. */
router.post('/banner', function(req, res, next) {
  req.myPromise = query('SELECT * FROM `db_banner`;')
		.then(result => ({ status: 200, message: '', data: result }));
	next();
});

router.post('/details', function(req, res, next) {
  req.myPromise = query('SELECT * FROM `db_homepage`;')
		.then(result => ({ status: 200, message: '', data: result }));
	next();
});

router.post('/officialBanner', function(req, res, next) {
  req.myPromise = query('SELECT * FROM `db_mainbanner`;')
		.then(result => ({ status: 200, message: '', data: result }));
	next();
});

router.post('/officialProduct', function(req, res, next) {
  req.myPromise = query('SELECT * FROM `db_mainproduct` WHERE `type` = 1;')
		.then(result => ({ status: 200, message: '', data: result }));
	next();
});

router.post('/officialstar', function(req, res, next) {
  req.myPromise = query('SELECT * FROM `db_mainproduct` WHERE `type` = 2;')
		.then(result => ({ status: 200, message: '', data: result }));
	next();
});

module.exports = router;
