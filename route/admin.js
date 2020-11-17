//引用express框架
const express = require('express')
//创建博客管理展示页面路由
const admin = express.Router();

//渲染登录页面
admin.get('/login', (req, res) => {
    res.render('admin/login')
});
// admin.post('/login',);
//创建用户列表路由
admin.get('/user', require('./admin/userPage'));
admin.get('/article', require('./admin/article.js'));
admin.get('/article-edit', require('./admin/article-edit.js'));
admin.post('/article-add',require('./admin/article-add'));
//              /admin可以省略
// admin.post('/admin/article-add',require('./admin/article-add'));
//创建用户编辑页面路由
admin.get('/user-edit', require('./admin/user-edit'));
//创建实现用户添加功能路由
admin.post('/user-edit',require('./admin/user-edit-fn'))
//将路由对象作为模块成员进行导出
module.exports = admin;
