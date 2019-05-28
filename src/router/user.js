const {
    loginCheck
} = require('../controller/user');
const {SuccessModel, ErrorModel} = require('../model/resModel');
const handleUserRouter = (req, res)=>{
    const method = req.method; // GET POST 

    //获取博客列表
    if(method === 'POST' && req.path === '/api/user/login'){
        const {username, password} = req.body;
        const result = loginCheck(username, password);
        return result.then(data =>{
            return (data && data.username) ? new SuccessModel() : new ErrorModel('登陆失败');
        });
    }
};
module.exports = handleUserRouter;