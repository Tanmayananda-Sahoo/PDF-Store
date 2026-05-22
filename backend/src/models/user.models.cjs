const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxLength: 20,
        minLength: 1
    },
    email: {
        type: String,
        required: true,
        RegExp: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    },
    mobileNo: {
        type: Number,
        length: 10,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, {timestamps: true})


userSchema.methods.isPasswordCorrect = async function(password){
    return bcrypt.compare(password, this.password);
}

userSchema.methods.generateAccessToken = async function() {
    return jwt.sign(
        {
            id: this._id,
            email: this.email
        },
        process.env.JWT_SECRET,
        {
            expiresIn: "5m"
        }
    )
}

userSchema.methods.generateRefreshToken = async function() {
    return jwt.sign(
        {
            id: this._id,
            email: this.email
        },
        process.env.JWT_SECRET,
        {
            expiresIn: "7d"
        }
    )
}

const User = new mongoose.model("User", userSchema);

module.exports = {
    User
}