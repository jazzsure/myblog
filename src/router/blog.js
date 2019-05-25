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
        const listData = getList(author, keyword);
        return new SuccessModel(listData);
    }
    //获取博客详情
    if(method === 'GET' && req.path === '/api/blog/detail'){
        const data = getDetail(id);
        return new SuccessModel(data);
    }

    //新建一篇博客
    if(method === 'POST' && req.path === '/api/blog/add'){
        const blogData = req.body;
        const data = newBlog(blogData);
        return new SuccessModel(data);
    }
    //更新一篇博客
    if(method === 'POST' && req.path === '/api/blog/update'){
        console.log('reqbody', req.body);
        const result = updateBlog(id, req.body);
        if(result){
            return new SuccessModel();
        }else {
            return new ErrorModel();
        }
    }
    //删除一篇博客
    if(method === 'POST' && req.path === '/api/blog/delete'){
        const result = delBlog(id);
        if(result){
            return new SuccessModel();
        }else {
            return new ErrorModel();
        }
    }
};
module.exports = handleBlogRouter;