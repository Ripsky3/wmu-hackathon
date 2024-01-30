const mongoose = require('mongoose');
const validator = require("validator");

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    lastname: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Must have valid email");
            }
        }
    },

})

const User = mongoose.model("User", userSchema);

module.exports = User