import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Characters = new Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    isCool: {
        type: Boolean
    },
    characterImage: {
        type: String
    }
});

export default mongoose.model('Characters', Characters);