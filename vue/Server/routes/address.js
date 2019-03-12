var express = require('express');
var query = require('../utils/dbHelper.js');
var router = express.Router();

router.post('/getaddress', function(req, res, next){
	var name = req.body.name;
	req.myPromise = 
		query('SELECT * FROM `db_address` WHERE `uName` = ?;', [ name ])
			.then(result => result);;
	next();
});
//获取单个地址
router.post('/getmyaddress', function(req, res, next){
	var id = req.body.id;
	req.myPromise = 
		query('SELECT * FROM `db_address` WHERE `id` = ?;', [ id ])
			.then(result => result[0]);;
	next();
});

//add address
router.post('/add', function(req, res, next){
	var { uName, name, phone, phone2, province, city, area, town, address } = req.body;
	req.myPromise = query(
		'INSERT `db_address`(uName, name, phone, phone2, province, city, town, county, address) VALUES (?,?,?,?,?,?,?,?,?);', 
		[ uName, name, phone, phone2, province, city, area, town, address]
	)
		.then();
	next();
});

//update
router.post('/update', function(req, res, next){
	var { name, phone, phone2, province, city, area, town, address, id } = req.body;
	req.myPromise = query(
		'UPDATE `db_address` SET `name`=?, `phone`=?, `phone2`=?, `province`=?, `city`=?, `town`=?, `county`=?, `address`=? WHERE `id`=?;', 
		[ name, phone, phone2, province, city, area, town, address, id]
	)
		.then();
	next();
});

//delete
router.post('/delete', function(req, res, next){
	var id = req.body.id;
	req.myPromise = 
		query('DELETE FROM `db_address` WHERE `id` = ?;', [ id ])
			.then(result => result);;
	next();
});

module.exports = router;