var express = require('express');
var query = require('../utils/dbHelper.js');
var router = express.Router();

/* GET province. */
router.post('/getProvince', function(req, res, next) {
  req.myPromise = query('SELECT * FROM `db_zone` WHERE `fid` = 0;')
		.then(result => ({ status: 200, message: '', data: result }));
	next();
});

// get city
router.post('/getCity', function(req, res, next) {
	var fid = req.body.fid;
  req.myPromise = query('SELECT * FROM `db_zone` WHERE `fid` = ?;',[ fid ])
		.then(result => ({ status: 200, message: '', data: result }));
	next();
});

//get area
router.post('/getArea', function(req, res, next) {
	var fid = req.body.fid;
  req.myPromise = query('SELECT * FROM `db_zone` WHERE `fid` = ?;',[ fid ])
		.then(result => ({ status: 200, message: '', data: result }));
	next();
});

//get area
router.post('/getTown', function(req, res, next) {
	var fid = req.body.fid;
  req.myPromise = query('SELECT * FROM `db_zone` WHERE `fid` = ?;',[ fid ])
		.then(result => ({ status: 200, message: '', data: result }));
	next();
});


module.exports = router;