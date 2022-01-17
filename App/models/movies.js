const mongoose = require('mongoose');
const comments = require('./comments');

const Schema = mongoose.Schema;

const moviesSchema = new Schema ({
    Name: {
        Type: String,
        require : True
    },
    Openingcrawl: {
        Type: String
    },
    commentCount:{
        Type: Number
    },
    comment: [
        {
            Type: Schema.Types.ObjectId,
            ref: comments
        }
    ]

})

module.exports = mongoose.model('Movies', moviesSchema);