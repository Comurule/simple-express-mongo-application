const { Router } = require('express');

const userController = require('../controllers/UserController');
const { validateSchema } = require('../middlewares/schemaValidations/userValidation');

const router = Router();

//User Routes
router.get('/user', userController.dashboard);
router.post('/register', validateSchema, userController.register);
router.post('/login', validateSchema, userController.login);

module.exports = router;