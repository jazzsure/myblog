const {exec} = require('../db/mysql');
const getList = (author, keywords)=>{
    let sql = `select * from blogs where 1=1 `;
    if(author){
        sql += `and author=${author} `;
    }
    if(keywords){
        sql += `and title like ${keywords} `;
    }
    sql += `order by createtime desc`;
    return exec(sql);
};
const getDetail = (id)=>{
    const sql = `select * from blogs where id=${id}`;
    return exec(sql).then(rows=>{
        return rows[0];
    });
}
const newBlog = (blogData = {})=>{
    const {title,content,author} = blogData;
    const createtime = Date.now();
    const sql = `insert into blogs (title, content, createtime,author)
        values ('${title}', '${content}', ${createtime}, '${author}');
    `;
    return exec(sql).then(insertData =>{
        console.log('insertData', insertData);
        return {
            id: insertData.insertId
        }
    });
}
const updateBlog = (id, blogData = {})=>{
    //id是要更新博客的id
    //blogData
    const {title,content} = blogData;
    const sql = `update blogs set title='${title}',content='${content}' where id=${id} and author='${author}'`;
    return exec(sql).then((updateResult)=>{
        return updateResult.affectedRows > 0;
    });
}
const delBlog = (id, author)=>{
    const sql=`delete from blogs where id=${id} and author='${author}'`;
    console.log(sql);
    //id就是要删除博客的id
    return exec(sql).then(delResult=>{
        return delResult.affectedRows > 0;
    });
}
module.exports = {
    getList,
    getDetail,
    newBlog,
    updateBlog,
    delBlog
};