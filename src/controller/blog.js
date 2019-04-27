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

module.exports = {
    getList
};