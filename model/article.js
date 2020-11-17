const mongoose = require('mongoose')
const arrilceSchema = new mongoose.Schema({
    title: {
        type: String,
        maxlength: 20,
        minlength: 4,
        required: [true, '请填写文章标题']
    },
    author: {
        // type: mongoose.Schema.Types.ObjectId,
        type: String,
        ref: 'User',
        required: [true, '请传递作者']
    },
    publishDate: {
        type: Date,
        default: Date.now
    },
    cover: {
        type: String,
        default: null
    },
    content: {
        type: String
    }
})

const Article = mongoose.model('Article',arrilceSchema)
function createArticle () {
    Article.create({
        title: '我的第一篇文章',
        author: 'wuzhaoxia',
        content: 'hello'
    });
}
// createArticle()
module.exports = {
    Article
}
