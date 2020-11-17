//导入用户集合构造函数
const {User} = require('../model/user')
const bcrypt = require('bcrypt')
const login = async (req, res) => {
    //接受请求参数
    const {email, password} = req.body;
    if (email.trim().length == 0 || password.trim().length == 0) {
        //根据邮箱地址查询用户信息
        let user = await User.findOne({email: email})
        if (user) {
            let isValid = await bcrypt.compare(password,user.password);
            if (isValid) {
                req.session.username = user.username;
                req.app.locals.userInfo = user;
                res.redirect('/admin/user');
            } else {
                res.status(400).render('/admin/error', {msg: '邮件地址或密码错误'});
            }
        } else {
            res.status(400).render('/admin/error', {msg: '邮件地址或密码错误'});
        }
    }
}
module.exports = login;
