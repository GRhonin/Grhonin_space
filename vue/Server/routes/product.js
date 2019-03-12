var express = require('express');
var query = require('../utils/dbHelper.js');
var router = express.Router();

/* GET product info. */
router.post('/:cid', function(req, res, next) {
	let cid = req.body.cid;
  req.myPromise = query('SELECT * FROM `db_mainproduct` WHERE `id` = ?;',[ cid ])
		.then(result => ({ status: 200, message: '', data: result[0] }));
	next();
});
//getbanner
router.post('/getbanner', function(req, res, next) {
	let cid = req.body.cid;
  req.myPromise = query('SELECT * FROM `db_probanner` WHERE `fid` = ?;',[ cid ])
		.then(result => ({ status: 200, message: '', data: result }));
	next();
});

//entercart
router.post('/entercart', function(req, res, next) {
	var { name, pid, count, price, addTime } = req.body;	
	req.myPromise = query(
		'INSERT `db_cart`(uName, pid, count, price, addTime) VALUES (?,?,?,?,?);', 
		[ name, pid, count, price, addTime]
	)
		.then();
	next();
});

router.post('/paintingcategory', function(req, res, next) {
  req.myPromise = query('SELECT * FROM `db_painting_category`;')
		.then(result => ({ status: 200, message: '', data: result }));
	next();
});

module.exports = router;