module.exports=(req,res)=>{
    req.app.locals.currentLink = 'articl-edit';
    res.render('admin/article-edit.art')
}