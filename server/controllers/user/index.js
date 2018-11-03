const bcrypt = require('bcrypt');
const gravatar = require('gravatar');
const { User } = require('../../models/user');


const register = async (req, res) => {
    // check weather use already exists
    const { name, email, password } = req.body;

    let user = await User.findOne({ email });
    if (user) return res.status(400).send('User already exists with this email');

    // Save new user
    const avatar = gravatar.url(email, {
        s: '200', // Size
        r: 'pg', // Rating
        d: 'mm', // Default avatar
    });
    user = new User({
        name,
        email,
        avatar,
        password
    });

    // encrypt password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    user = await user.save();
    res.send(user);
}

const users = async (req, res) => {
    const users = await User.find();

    res.send(users);
}


module.exports = {
    register,
    users
}