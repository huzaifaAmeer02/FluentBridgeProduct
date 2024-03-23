
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
            required:true,
            unique: true // Assuming email should be unique
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
        },
        quizAnswers: [{
            questionId: mongoose.Schema.Types.ObjectId,
            answer: String // Store the user's answer to the question
        }],
    });
module.exports = mongoose.model('user',UserSchema);


