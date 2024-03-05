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
                const transporter= nodemailer.createTransport({
                    service:'gmail',
                    auth:{
                        user:'testdevstackemail@gmail.com',
                        pass:'jxdo sqxg szag keuu',
                    }
                });

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
                })
            })


        }else{
            return resp.status(409).json({'error':'already exists!'});
        }
    })


}