const userModel = require('./models/user')
const User = userModel.User;



module.exports = {
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