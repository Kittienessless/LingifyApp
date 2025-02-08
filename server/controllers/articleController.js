 
const {getDb} = require("../db/db.js");
const {addToken, getUserIdByToken, deleteByToken} = require("../DB/tokens");

const {checkAuth} = require("../modules/user.js");

class articleController {
  async createPosts (req, res){ 
    try {
      const {title, text_body} = req.body;
      const token = req.cookies.token;
      const userId = await checkAuth(token);
      const user = await getDb().models.User.findByPk(userId);
      const author = user.name;
      const newPost =  await getDb().models.Post.create({
        title, 
        text_body, 
        author
       });
       console.log('post added');

       return res.json(newPost );
      }
     catch (e) {
        console.log(e)
        res.status(400).json({message: "post save error"})
    }
  }
 
  async getAllPosts (req, res) {
    try {
      const posts = await  getDb().models.Post.findAll();
      return res.json(posts)
   
    } catch (e) {
      console.log(e)
      res.status(400).json({message: "get posts collection error"})
    }
  } 

   
  async getOnePost(req, res){
    try {
      const id=req.params.id;
      const post = await  getDb().models.Post.findByPk(id);
      return res.json(post);
    } catch (e) {
      res.status(400).json({message: "get posts  error"})

    }
  }

  //изменить пост

  //удалить пост
  
}
module.exports = new articleController()