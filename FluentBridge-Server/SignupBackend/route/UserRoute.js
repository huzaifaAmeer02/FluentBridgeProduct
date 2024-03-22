const express = require('express');
const userController = require('../controller/UserController');
const verifyToken = require('../middleware/AuthMiddleware');
const UserController = require("../controller/UserController");
const router = express.Router();
router.post('/signup', userController.signup);
router.post('/login', userController.login);


// Route for updating user details
router.put('/update-email', verifyToken, UserController.updateUserEmail);

// Route for changing password
router.put('/change-password', verifyToken,  UserController.changePassword);



// // Modify the route to update user details to handle profile image update if needed
// router.put('/update', upload.single('image'), UserController.updateUser);

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



module.exports=router;

