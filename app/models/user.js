var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var Schema = mongoose.Schema;


var UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

// hash password on user update
UserSchema.pre('save', function(callback) {
    var user = this;

    if (!user.isModified('password'))
        return callback();

    bcrypt.genSalt(5, function(err, salt) {
        if (err)
            return callback(err);
        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err)
                return callback(err);
            user.password = hash;
            callback();
        });
    });
});

UserSchema.methods.verifyPassword = function(password, callback) {
    bcrypt.compare(password, this.password, function(err, isMatch) {
        console.log('verifyPassword: ' + isMatch);
        if (err)
            return callback(err);
        callback(null, isMatch);
    });
};

var UserModel = mongoose.model('User', UserSchema, 'users');

module.exports = UserModel;