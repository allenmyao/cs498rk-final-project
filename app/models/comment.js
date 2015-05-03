var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var CommentSchema = new Schema({
    stack: {
        type: String,
        required: true
    },
    user: {
        type: String,
        default: null
    },
    username: {
        type: String,
        default: 'Anonymous'
    },
    content: {
        type: String,
        required: true
    }
});

var CommentModel = mongoose.model('Comment', CommentSchema, 'comments');

module.exports = CommentModel;