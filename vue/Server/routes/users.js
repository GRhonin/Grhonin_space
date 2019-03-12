var express = require('express');
var query = require('../utils/dbHelper.js');
var router = express.Router();
// 手机短信登录验证
router.post('/codeLogin', function(req, res, next){
	var phone = req.body.phone, code = req.body.code;
	if(code === '6666')
		req.myPromise = 
			query('CALL p_login(1,?,?);', [ phone, '' ])
				.then(result => result[0]);
	else
		req.myPromise = new Promise((resolve, reject) => {
			resolve('验证码错误或过期');
		});
	next();
});
// 账号密码登录验证
router.post('/pwdLogin', function(req, res, next){
	var name = req.body.uName, pwd = req.body.pwd;
	req.myPromise = 
		query('CALL p_login(0,?,?);', [ name, pwd ])
			.then(result => result[0]);;
	next();
});

router.post('/getaccount', function(req, res, next){
	var name = req.body.name;
	req.myPromise = 
		query('SELECT * FROM `db_user` WHERE `name` = ?;', [ name ])
			.then(result => result[0]);;
	next();
});

router.post('/getorder', function(req, res, next){
	var uName = req.body.name;
	req.myPromise = query('CALL p_getUserCart(?);', [ uName ])
		.then(results => results[0]);
	next();
});

module.exports = router;
