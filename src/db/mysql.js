const mysql = require('mysql');
const {MYSQL_CONFIG} = require('../conf/db');
const con = mysql.createConnection(MYSQL_CONFIG);
//开始链接
con.connect();
//执行sql的函数
function exec(sql){
    const promise = new Promise((resolve,reject)=>{
        con.query(sql,(err,res)=>{
            if(err){
                reject(err);
                return;
            }
            resolve(res);
        });
    });
}