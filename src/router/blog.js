const {
    getList, 
    getDetail,
    newBlog,
    updateBlog,
    delBlog
} = require('../controller/blog');
const {SuccessModel, ErrorModel} = require('../model/resModel');
const handleBlogRouter = (req, res)=>{
    const method = req.method; // GET POST 
    const id = req.query.id;
    //获取博客列表
    if(method === 'GET' && req.path === '/api/blog/list'){
        const author = req.query.author || '';
        const keyword = req.query.keyword || '';
        //const listData = getList(author, keyword);
        //return new SuccessModel(listData);
        const result = getList(author,keyword);
        return result.then(listData =>{
            return new SuccessModel(listData);
        });
    }
    //获取博客详情
    if(method === 'GET' && req.path === '/api/blog/detail'){
        const result = getDetail(id);
        return result.then(data =>{
            return new SuccessModel(data);
        });
    }

    //新建一篇博客
    if(method === 'POST' && req.path === '/api/blog/add'){
        const author = 'zhangsan';//假数据
        req.body.author = author;
        const result = newBlog(req.body);
        return result.then(data =>{
            return new SuccessModel(data);
        });
    }
    //更新一篇博客
    if(method === 'POST' && req.path === '/api/blog/update'){
        const result = updateBlog(id, req.body);
        return result.then(val => val ? new SuccessModel() : new ErrorModel('更新博客失败'));
    }
    //删除一篇博客
    if(method === 'POST' && req.path === '/api/blog/delete'){
        const author = 'zhangsan';//假数据
        const result = delBlog(id,author);
        return result.then(val => val ? new SuccessModel(): new ErrorModel());
    }
};
module.exports = handleBlogRouter;