const mongoose= require('mongoose');
const UserSchema =
    new mongoose.Schema({
        fullName:{
            type:String,
            required:true
        },
        username: String,
        email:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        },
        birthdate: Date,
        address: String,
        activeState:{
            type:Boolean,
            required:true
        },
        profileImage: {
            type: String // Store the URL of the profile image
        }
    });
module.exports = mongoose.model('user',UserSchema);
