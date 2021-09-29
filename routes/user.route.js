const express = require('express');
const router = express.Router();
const multerConfig = require('../middleware/multer.config');
const auth = require('../middleware/auth');
const sendRestMail = require('../middleware/email.service')
const userController = require('../controllers/user.controller');
//SignIn
router.post('/signin', userController.signIn)
//SignUp
router.post('/signup', multerConfig, userController.signUp)
//UpdateUser
router.put('/updateuser/:id',auth, multerConfig, userController.updateUser)

//Forgot Password
router.post('/forgotpassword', userController.resetPassword, sendRestMail)

// Reset Password
router.put('/resetpassword/:token', userController.putResetPassword);

//get userImage
router.get('/image/:filename', userController.getImageUser)


module.exports = router; 