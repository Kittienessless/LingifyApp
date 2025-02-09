// TODO:
// контроллер для регистрации, получения данных, ввода и изменения


const {getDb} = require("../db/db.js");

require("dotenv").config();
const {checkAuth} = require("../modules/user.js");


class userController {

  async getUsers (req, res) {
    try {
    const users = await getDb().models.User.findAll();
    return  res.json(users)
    } catch (e) {
      console.log(e)
         res.status(400).json({message: "get users error"})
    }
  } 

 
  async getOneUserByPK(req, res){
    try {
      const token = req.cookies.token;
      const userId = await checkAuth(token);
      const user = await getDb().models.User.findByPk(userId);
  
      return  res.json(user);
    } catch (e) {
         res.status(400).json({message: " getOneUserByPK error"})

    }
  }
  

  //update
  async updateNameUserByPK(req, res){
    try {
      const token = req.cookies.token;
      const userId = await checkAuth(token);
      const user = await getDb().models.User.findByPk(userId);
      const {name} = req.body;
      if (name ==null) {
        res.status(400).json({message : 'empty field'});

      }
      user.name = name; 
      user = await getDb().models.User.save(user.name); //?????
      return  res.json(user);
    } catch (e) {
         res.status(400).json({message: " update name error"})

    }
  }
  //update pwd
  async updatePwdUserByPK(req, res){
     
  }
  //reset pwd
  async resetPwdUserByPK(req, res){
     
  }
  //delete account
  async DeleteUserByPK(req, res){
    
  }




}
module.exports = new userController()
