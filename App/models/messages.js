const mongoose = require('mongoose');
const comments = require('./comments');

const Schema = mongoose.Schema;

const mesaagesSchema = new Schema ({
    comments: {
        Type: Schema.Types.ObjectId,
        ref: comments
    },
    content: {
        Type: String,
        max: 500
    }
})


module.exports = mongoose.model ('Messages', mesaagesSchema);