const UserSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    activeState: {
        type: Boolean,
        required: true
    },
    profileImage: {
        type: String // Store the URL of the profile image
    }
});
