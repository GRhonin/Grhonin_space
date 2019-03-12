var mysql = require('mysql');
// 创建连接池对象
var pool = mysql.createPool({
	connectionLimit: 10,
	host: 'localhost',
	user: 'root',
	password: '123',
	database: 'thinkpad'
});

function query(sql, params=[]){
	return new Promise((resolve, reject) => {
		pool.getConnection((err, connection) => {
			if(err) { reject(err); return; }
			connection.query(sql, params, (err, results, fields) => {
				connection.release();
				if(err) reject(err); 
				else resolve(results);
			});
		});	
	});
}

module.exports = query;