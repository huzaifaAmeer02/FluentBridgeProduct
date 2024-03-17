const express = require('express');
const userController = require('../controller/UserController');
// const verifyToken = require('../middleware/AuthMiddleware');
// const UserController = require("../controller/UserController");
const router = express.Router();
router.post('/signup', userController.signup);
router.post('/login', userController.login);

// Route for updating user details
// router.put('/update', UserController.updateUser);

// Route for changing password
// router.put('/change-password',  UserController.changePassword);

const multer = require('multer');

// Multer configuration for file upload
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage: storage });

// Update user details including profile image
// router.put('/update',  upload.single('image'), UserController.updateUser);

module.exports=router;