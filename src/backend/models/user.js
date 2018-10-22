import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let User = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
    },
    newsletter: {
        type: Boolean, 
    },
    userImage: {
        type: String,
    }
});

export default mongoose.model('User', User);