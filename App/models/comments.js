const mongoose = require('mongoose');
const movies = require('./movies');

const Schema = mongoose.Schema;

const commentSchema = new Schema ({
    owner: {
        Type: Schema.Types.ObjectId,
        ref: Movies
    },
    messages : {
        Type: Schema.Types.ObjectId,
        ref: Messages
    },
    createdAT: {
        Type: Date,
        default: Date.now()
    },
    IPAddress: {
        Type: String
    }

})


module.exports = mongoose.model ('Comments', commentSchema);

