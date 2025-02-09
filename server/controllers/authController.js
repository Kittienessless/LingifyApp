// TODO: 
// кортроллер для входа и выхода
const bcrypt = require('bcrypt');
const saltRounds = await bcrypt.genSalt(5);
const jwt = require('jsonwebtoken')
const {getDb} = require("../db/db.js");
const {addToken, getUserIdByToken, deleteByToken} = require("../db/token.js");

const { Op } = require("sequelize")
require("dotenv").config();
const {checkAuth} = require("../modules/user.js");

const COOKIE_NAME = "token";

class authController {
  
  async registration (req, res){ 
    try {
      const {email, name, password} = req.body;
       const login = await getDb().models.User.findOne({where: {email}});
      if(login !== null || undefined) {
         res.status(400).json({message : 'email is already exists'});

      }
      const hashPassword = await bcrypt.hash(password, saltRounds);
     
       const newUser =  await getDb().models.User.create({
        email, 
        name,
        password : hashPassword,
        role : process.env.USER_ROLE
       });
       console.log('user added');
       
      return  res.status(200).json(newUser);
      }
    catch (e) {
        console.log(e)
        res.status(400).json(e.massage);
    }
  }

  async login (req, res) {
   try {

    const {email, password} = req.body;
    //разхэшировать пароли и сравнить 
    const user = await getDb().models.User.findOne( {where: { 
      [Op.and]: [
        {
          email: email
        }, {
          password: password
        }
      ]}
    });

      if (user == null) {
      console.log("user does not exists")
     res.status(400).json(e.message);
    }
    const token = await addToken(user.id);
    res.cookie('token', token, {
        maxAge: 24 * 60 * 60 * 1000, 
        httpOnly: false,
        sameSite: 'lax',//process.env.NODE_ENV === 'production' ? 'none' : 'lax',
        secure: false //process.env.NODE_ENV === 'production'
    });

    return res.status(200).json({massage:"successfully login"});

   }
   catch (e) {
    console.log(e);
      res.status(400).json({message: "login error"})

   }
  }

  
  async logout(req, res){
    try {
      const token = req.cookies.token;
      await checkAuth(token);

      await deleteByToken(token);

      res.clearCookie(COOKIE_NAME);

     return res.status(200).json({ok: true});
    } catch (e) {
         res.status(400).json({message: "logout error"})

    }
  }


}
module.exports = new authController()
