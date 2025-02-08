// TODO:
// роутер для пользователя - crud 

const Router = require('express');
const router = new Router();
const controller = require ('../controllers/userController.js');

router.get('/allUsers', controller.getUsers); 
router.get('/getOneUserByPK', controller.getOneUserByPK);
router.put('/updateNameUserByPK', controller.updateNameUserByPK);
router.put('/updatePwdUserByPK', controller.updatePwdUserByPK);
router.put('/resetPwdUserByPK', controller.resetPwdUserByPK);
router.delete('/DeleteUserByPK', controller.DeleteUserByPK);

module.exports = router