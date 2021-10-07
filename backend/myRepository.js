const userModel = require('./models/user')
const productModel = require('./models/product')
const jwt = require('jsonwebtoken')

const Product = productModel.Product;
const User = userModel.User;

const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
    return jwt.sign({ id }, 'rental project secret', {
        expiresIn: maxAge
    })
}

module.exports = {
    async getProducts() {
        try {
            const allProducts = await Product.find();
            return allProducts;
        }
        catch(err) {
            console.log(err);
        }
    },

    async createUser(userInfo) {
        try {
            const newUser = new User(userInfo);
            const token = createToken(newUser._id)
            const x = await newUser.save();
            return {
                x: x,
                token: token
            }
        }
        catch(err) {
            console.log(`An error occured while attempting to create user: ${err}`);
            return {err : err};
        }
    },

    async userLogin(loginInfo) {
        try {
            const user = await User.login(loginInfo);
            const token = createToken(user._id)
            return {
                user: user._id,
                token: token
            }
        }
        catch (err) {
            console.log(`An error occured while attempting to login: ${err}`);
            return err;
        }
    },
}