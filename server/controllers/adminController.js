// TODO:
// контроллер для управления сайтом, смены ролей и статистики


const {getDb} = require("../db/db.js");
require("dotenv").config();
const {checkAuth} = require("../modules/user.js");


class adminController {

  async changeUserRole(req, res){
    try {
      
    } catch (e) {
 
    }
  }

  async getUserStatistics(req, res) {
    try {
      
    } catch (e) {
      
    }
  }

  async getArticleStatistics(req, res) {
    try {
      
    } catch (e) {
      
    }
  }

  async getLanguageStatistics(req, res) {
    try {
      
    } catch (e) {
      
    }
  }

 




}
module.exports = new adminController()
