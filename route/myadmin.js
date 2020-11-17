//引用express框架
const express = require('express')
//创建博客管理展示页面路由
const myadmin = express.Router();
myadmin.get('/login',(req,res) => {
    res.send('我是myadmin')
});
//将路由对象作为模块成员进行导出
module.exports = myadmin;