# 我的个人博客

## 1. 项目环境搭建
### 1.1 项目介绍
- 该博客存放了我学习前端学习流程及学过程中的笔记和项目，目前还在完善阶段
### 1.2 案例初始化
1. 建立项目所需文件夹
    - public 静态资源
    - model 数据库操作
    - route 路 由
    - views 模 板
2. 初始化项目描述文件
    - npm init -y
3. 下载项目所需第三方模块
    - npm install express mongoose art-template express-art-template
4. 创建网站服务器
5. 构建模块化路由
6. 构建博客管理页面模板

## 2. 项目功能实现
### 2.1 数据分页
- 当数据库中的数据非常多是，数据需要分批次显示，这时就需要用到数据分页功能。  
- 分页功能核心要素：  
    1. 当前页，用户通过点击上一页或者下一页或者页码产生，客户端通过get参数方式传递到服务器端
    2. 总页数，根据总页数判断当前页是否为最后一页，根据判断结果做响应操作  
    
|数据条数|每页显示数据条数|总页数|
|:-----|:-----|:-----|
|50|5|10|
|52|5|11|

- 总页数：Math. ceil（总数据条数 / 每页显示数据条数）
```
limit(2) // limit 限制查询数量 传入每页显示的数据数量
skip(1) // skip 跳过多少条数据 传入显示数据的开始位置
```
- 数据开始查询位置=（当前页-1）- 每页显示的数据条数

### 2.2 开发环境与生产环境
#### 什么是开发环境与生产环境  
- 环境，就是指项目运行的地方，当项目处于开发阶段，项目运行在开发人员的电脑上，项目所处的环境就是开发环境。当项目开发完成以后，要将项目放到真实的网站服务器电脑中运行，项目所处的环境就是生产环境。

#### 为什么要区分开发环境与生产环境  
- 因为在不同的环境中，项目的配置是不一样的，需要在项目代码中判断当前项目运行的环境，根据不同的环境应用不同的项目配置。  

#### 如何区分开发环境与生产环境  
- 通过电脑操作系统中的系统环境变量区分当前是开发环境还是生产环境。  
```
if (process. env. NODE_ENV == 'development') {
	// 开发环境
} else {
	// 生产环境
}
```

### 2.7 第三方模块config
- 作用：允许开发人员将不同运行环境下的应用配置信息抽离到单独的文件中，模块内部自动判断当前应用的运行环境， 并读取对应的配置信息，极大提供应用配置信息的维护成本，避免了当运行环境重复的多次切换时，手动到项目代码  中修改配置信息

#### 使用步骤  
1. 使用npm install config命令下载模块
2. 在项目的根目录下新建config文件夹
3. 在config文件夹下面新建default. json、development. json、production. json文件
4. 在项目中通过require方法，将模块进行导入
5. 使用模块内部提供的get方法获取配置信息
- 将敏感配置信息存储在环境变量中
    - 1. 在config文件夹中建立custom-environment-variables. json文件
    - 2. 配置项属性的值填写系统环境变量的名字
    - 3. 项目运行时config模块查找系统环境变量，并读取其值作为当前配置项属于的值
```
{
    "db": {
        "pwd": "APP_PWD"
    }
}
```

### 2.8 文章评论
1. 创建评论集合
2. 判断用户是否登录，如果用户登录，再允许用户提交评论表单
3. 在服务器端创建文章评论功能对应的路由
4. 在路由请求处理函数中接收客户端传递过来的评论信息
5. 将评论信息存储在评论集合中
6. 将页面重定向回文章详情页面
7. 在文章详情页面路由中获取文章评论信息并展示在页面中

## 3. 项目包含的知识点
### 3.1 文件读取 FileReader
```
var reader = new FileReader(); 
reader.readAsDataURL('文件'); 
reader.onload = function () {
    console.log(reader.result);
}
```

### 3.2 数据分页 mongoose-sex-page
```
const pagination = require('mongoose-sex-page');
pagination(集合构造函数).page(1).size(20).display(8).exec();
```

### 3.3 mongoDB数据库添加账号
1. 以系统管理员的方式运行 powershell
2. 连接数据库 mongo
3. 查看数据库 show dbs
4. 切换到admin数据库 use admin
5. 创建超级管理员账户 db.createUser()
6. 切换到blog数据 use blog
7. 创建普通账号 db.createUser()
8. 卸载mongodb服务
    - 停止服务 net stop mongodb
    - mongod --remove
9. 创建mongodb服务
    - mongod --logpath="C:\Program Files\MongoDB\Server\4.1\log\mongod.log" --dbpath="C:\Program Files\MongoDB\Server\4. 1\data" --install –-auth
10. 启动mongodb服务 net start mongodb
11. 在项目中使用账号连接数据库
    - mongoose.connect('mongodb://user:pass@localhost:port/database')
