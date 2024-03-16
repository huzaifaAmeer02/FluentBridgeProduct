const express = require('express');
const userController = require('../controller/UserController');
// const verifyToken = require('../middleware/AuthMiddleware');
const UserController = require("../controller/UserController");
const router = express.Router();
router.post('/signup', userController.signup);
router.post('/login', userController.login);

// Route for updating user details
router.put('/update', UserController.updateUser);

// Route for changing password
router.put('/change-password',  UserController.changePassword);
module.exports=router;