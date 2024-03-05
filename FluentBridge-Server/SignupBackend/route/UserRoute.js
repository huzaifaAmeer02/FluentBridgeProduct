const userSchema= require('../model/UserSchema');
const bcrypt= require('bcrypt');
const salt=10;
const nodemailer= require('nodemailer');
const jsonwebtoken =require('jsonwebtoken');

const signup = (req,resp) => {

    userSchema.findOne({'email':req.body.email}).then(result=>{
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


        }else{
            return resp.status(409).json({'error':'already exists!'});
        }
    })


}