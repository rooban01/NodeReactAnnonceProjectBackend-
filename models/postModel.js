const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    categories: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    prix: {
        type: String,
        required: true
    },
    imageUrl: {
        type:String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, {
    timestamps: true
}
);

module.exports = mongoose.model('Post', postSchema);

