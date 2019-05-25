const getList = (author, keywords)=>{
    //先返回假数据
    return [
        {
            id: 1,
            title: '标题A',
            content: '内容A',
            createTime: Date.now(),
            author: 'zhangsan'
        },
        {
            id: 2,
            title: '标题A',
            content: '内容A',
            createTime: Date.now(),
            author: 'zhangsan'
        },
        {
            id: 3,
            title: '标题A',
            content: '内容A',
            createTime: Date.now(),
            author: 'zhangsan'
        }
    ]
};
const getDetail = (id)=>{
    //先返回假数据 
    return {
        id: 1,
        title: ' 标题A',
        content: '内容A',
        createTime: Date.now(),
        author: 'zhangsan'
    }
}
const newBlog = (blogData = {})=>{
    //blogData是一个对象，包含content title属性
    console.log('new Blogdata', blogData);
    return {
        id: 3//表示新建博客插入到表里的id
    };
}
const updateBlog = (id, blogData = {})=>{
    //id是要更新博客的id
    //blogData
    console.log('update blog', id, blogData);
    return true;
}
const delBlog = (id)=>{
    //id就是要删除博客的id
    return true;
}
module.exports = {
    getList,
    getDetail,
    newBlog,
    updateBlog,
    delBlog
};