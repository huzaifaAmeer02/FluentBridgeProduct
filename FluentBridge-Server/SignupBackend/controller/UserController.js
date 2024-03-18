const userSchema= require('../model/UserSchema');
const bcrypt= require('bcrypt');
const salt=10;
const nodemailer= require('nodemailer');
const jsonwebtoken =require('jsonwebtoken');

const signup = (req,resp) => {
    userSchema.findOne({'email':req.body.email}).then(result=>{
        // console.log('User lookup result:', result);
        if(result==null){
            bcrypt.hash(req.body.password,salt,function (err,hash) {
                if (err){
                    return resp.status(500).json(err);
                }
                const user = new userSchema({
                    fullName:req.body.fullName,
                    password:hash,
                    email:req.body.email,
                    activeState:true
                });

                user.save().then(saveResponse=>{
                    return resp.status(201).json({'message':'Saved!'});
                }).catch(error=>{
                    return resp.status(500).json(error);
                });
                /*const transporter= nodemailer.createTransport({
                    service:'gmail',
                    auth:{
                        user:'fluentBridge@gmail.com',
                        pass:'jxdo sqxg szag keuu',
                    }
                });*/
                /*
                                const mailOption={
                                    from:'faslan2002rizni@gmail.com',
                                    to:req.body.email,
                                    subject:'New Account Creation',
                                    text:'You have Created Your Account!'
                                }
                                transporter.sendMail(mailOption, function (error, info) {
                                    if (error){
                                        return resp.status(500).json({'error':error});
                                    }else{
                                        user.save().then(saveResponse=>{
                                            return resp.status(201).json({'message':'Saved!'});
                                        }).catch(error=>{
                                            return resp.status(500).json(error);
                                        });
                                    }
                                })*/
            })


        }else{
            return resp.status(409).json({'error':'already exists!'});
        }
    })


}
const login = (req,resp) => {
    userSchema.findOne({'email':req.body.email}).then(selectedUser=>{
        if (selectedUser!==null){
            bcrypt.compare(req.body.password, selectedUser.password, function(err, result) {
                if (err){
                    return resp.status(500).json({'message':'internal server error'});
                }

                if(result){
                    const payload={
                        email:selectedUser.email
                    }

                    const secretKey=process.env.SECRET_KEY;
                    const expiresIn='24h';

                    const token = jsonwebtoken.sign(payload,secretKey,{expiresIn});
                    return resp.status(200).json(token);
                }else{
                    return resp.status(401).json({'message':'Password is incorrect!'});
                }
            });
        }else{
            return resp.status(404).json({'message':'not found!'});
        }
    });
}
// Function to update user details
// const updateUser = (req, res) => {
//     const { fullName, email } = req.body;
//     const userId = req.user.id; // Assuming you have user ID available in req.user after token verification
//
//     // // Check if file is uploaded
//     // let profileImage = '';
//     // if (req.file) {
//     //     profileImage = req.file.path; // Assuming file path is stored in req.file.path
//     // }
//
//     // Update user details in the database
//     userSchema.findByIdAndUpdate(userId, { fullName, email, profileImage }, { new: true })
//         .then(updatedUser => {
//             res.status(200).json(updatedUser);
//         })
//         .catch(error => {
//             res.status(500).json({ error: error.message });
//         });
// };



// Function to change password
const changePassword =  async (req, res) => {
    const { oldPassword, newPassword } = req.body;
    const userId = req.params._id;


    // Find user by ID
    userSchema.findById(userId)
        .then(user => {
            // Compare old password
            bcrypt.compare(oldPassword, user.password, function(err, result) {
                if (err) {
                    return res.status(500).json({ message: 'Internal server error' });
                }
                if (result) {
                    // Hash new password and update in the database
                    bcrypt.hash(newPassword, 10, function(err, hash) {
                        if (err) {
                            return res.status(500).json({ message: 'Internal server error' });
                        }
                        // Update password
                        user.password = hash;
                        user.save()
                            .then(() => {
                                res.status(200).json({ message: 'Password updated successfully' });
                            })
                            .catch(error => {
                                res.status(500).json({ error: error.message });
                            });
                    });
                } else {
                    res.status(401).json({ message: 'Old password is incorrect' });
                }
            });
        })
        .catch(error => {
            res.status(500).json({ error: error.message });
        });
};

// Function to update user details including email
// Function to update user email
const updateUserEmail = async (req, res) => {
    try {
        const { email } = req.body.email;
        const userId = req.user._id;

        // Update email in the database
        const updatedUser = await userSchema.findByIdAndUpdate(userId, { email }, { new: true });
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


module.exports={
    signup,login,
    // updateUser,
    changePassword,
    updateUserEmail
}

