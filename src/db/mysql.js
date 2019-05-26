const mysql = require('mysql');
const {MYSQL_CONF} = require('../config/db');
const con = mysql.createConnection(MYSQL_CONF);
//开始链接
con.connect();
//执行sql的函数
function exec(sql){
    return new Promise((resolve,reject)=>{
        con.query(sql,(err,res)=>{
            if(err){
                reject(err);
                return;
            }
            resolve(res);
        });
    });
}
module.exports = {
	exec
};