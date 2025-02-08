// TODO:
// роутер для авторизации- вход и выход
const Router = require('express');
const router = new Router();
const controller = require ('../controllers/authController.js');

router.post('/registration', controller.registration);
router.post('/login', controller.login);
router.delete('/logout', controller.logout);

module.exports = router