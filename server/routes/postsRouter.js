// TODO:
// роутер для постов - написание постов и добавление или изменения справочной информации
const Router = require('express');
const routerArticle = new Router();
const postsController = require('../controllers/articleController.')


routerArticle.post('/createPost', postsController.createPosts);
routerArticle.get('/PostsList', postsController.getAllPosts); 
routerArticle.get('/post/:id', postsController.getOnePost)
 

module.exports = routerArticle