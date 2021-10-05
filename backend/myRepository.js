const userModel = require('./models/user')
const productModel = require('./models/product')

const Product = productModel.Product;
const User = userModel.User;



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
            const x = await newUser.save();
            return {msg: `User created successfully: ${x}`}
        }
        catch(err) {
            console.log(`An error occured while attempting to create user: ${err}`);
            return err;
        }
    }
}