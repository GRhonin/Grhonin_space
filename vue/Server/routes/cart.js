var express = require('express');
var query = require('../utils/dbHelper.js');
var router = express.Router();

router.post('/getgoods', function(req, res, next){
	var uName = req.body.name;
	req.myPromise = 
		query('CALL p_getUserCart(?);', [ uName ])
			.then(result => {
                  return {status:200,data:result}
            })
	next();
});

router.post('/delete', function(req, res, next){
	var ids = req.body.ids;
		req.myPromise = query('DELETE FROM `db_cart` WHERE `id` IN (?);', [ids])
			.then(result => {
                  return {status:200,data:result}
            })
	next();
});

router.post('/balance', function(req, res, next){
	var ids = req.body.ids;
		req.myPromise = query('UPDATE `db_cart` SET `state` = 2 WHERE `id` IN ?;', [ ids ])
			.then(result => {
                  return {status:200,data:result}
            });
	next();
});
router.post('/increase', function(req, res, next){
	let id = req.body.id;
	req.myPromise = query(
		'UPDATE `db_cart` SET `count` = `count` + 1 WHERE `id` =?;', [id])
		.then(result => {
                  return {status:200,data:result}
            });
	next();
});
router.post('/decrease', function(req, res, next){
	let id = req.body.id;
	req.myPromise = query(
		'UPDATE `db_cart` SET `count` = `count`- 1 WHERE `id` =?;', [id]
		).then(result => {
                  return {status:200,data:result}
            });
	next();
});
module.exports = router;