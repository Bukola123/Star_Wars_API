const { validationResult } = require('express-validator');
const comment = require('../models/comments');
const os = require('os');


exports.addComment = function (req, res) {

const Messages = req.body;
const ipAddress = os.networkInterfaces();

const Comment = new comment ({
    Messages,
    IPAddress = ipAddress,
    owner = req.movie.id

})

try {
    await Comment.save();
}catch (err){
    res.status(500).json({ err });
}

}