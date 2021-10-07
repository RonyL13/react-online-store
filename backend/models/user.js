const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Missing field: Name'],
    },
    password: {
        type: String,
        required: [true, 'Missing field: Password'],
        minlength: [6, 'Password cannot be shorter than 6 characters'],
        maxlength: [20, 'Password cannot exceed 20 characters']
    },
    email: {
        type: String,
        required: [true, 'Missing field: Email'],
        unique: true,
        lowercase: true
    }
})

// Using mongoose hooks and bcrypt to hash passwords
userSchema.pre('save', async function (next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
 }) 
 
 userSchema.statics.login = async function(loginInfo) {
    const user = await this.findOne({email: loginInfo.email});
    if (user) {
       const auth = await bcrypt.compare(loginInfo.password, user.password)
       if (auth) {
          return user;
       }
       throw Error ('Incorrect Email or Password')
    }
    throw Error('Incorrect Email or Password')
 }

module.exports.User = mongoose.model('User', userSchema);