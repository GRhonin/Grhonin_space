var express = require('express');
var query = require('../utils/dbHelper.js');
var router = express.Router();

/* GET users listing. */
router.post('/product', function(req, res, next) {
  req.myPromise = query('SELECT * FROM `db_mainbanner` WHERE `type` = `main1`;')
		.then(result => ({ status: 200, message: '', data: result }));
	next();
});



module.exports = router;