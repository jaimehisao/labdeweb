const mongoose = require('mongoose')
const { Schema } = mongoose
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const passwordRe = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/

const UserSchema = new Schema({
    username: {
        type: String,
        required: [true, 'Please provide a username']
    },
    email: {
        type: String,
        required: [true, 'Please provide a valid e-mail'],
        unique: true,
        match: [
            passwordRe
        ]
    },
    password: {
        type: String,
        required: [true, 'Please provide a secure password'],
        minlength: 6,
        select: false,
    },
    userType: {
        type: String, 
        enum : ['ADMIN', 'STUDENT'],
        default: 'STUDENT'
    },
    level: {
        type: String, 
        enum : ['VIDEO JUEGOS', 'PYTHON BASICO', 'PYTHON INTERMEDIO'],
        required: function() { return this.userType === 'STUDENT'; }, // Only required if user is a STUDENT
    },
    approvedUser: {
        type: Boolean,
        default: false, 
    }, 
},
    { colletion: 'user-data' }
)

// Before save schema
UserSchema.pre("save", async function () {

    if (!this.isModified('password')) {
        next();
    }

    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
    // next();
})

UserSchema.methods.matchPasswords = async function (password) {
    return await bcrypt.compare(password, this.password)
}

UserSchema.methods.getSignedToken = function () {

    let usr = {
        id: this._id, 
        username: this.username, 
        email: this.email, 
        userType: this.userType, 
        level: this.userType === "STUDENT" ? this.level : null
    }

    return jwt.sign( usr , process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRE })
}

const User = mongoose.model('User', UserSchema)

module.exports = User