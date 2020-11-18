const {Article} = require('../model/article')
module.exports = async(req,res)=>{
    const id = req.query.id
    let article = await Article.findOne({_id:id})
    res.render('article.art',{
        article:article
    })
}