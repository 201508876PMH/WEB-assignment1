const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Define a schema
const userSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    emailAddress: {
        type: String,
        required: true
    },
    zipCode: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('User', userSchema);
