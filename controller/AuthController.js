import User from '../models/users.js'
import validators from '../validators/user_validators.js'
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const secretKey = 'SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'


const Register = async (req, res, next) => {
    // console.log(req.body);
    try {
        const userData = {...req.body};
        if (validators.validateName(userData.name) &&
            validators.validateEmail(userData.email) &&
            validators.validatePassword(userData.password)) {
            const user = await User.create({
                username: userData.username,
                name: userData.name,
                age: userData.age,
                email: userData.email,
                password: userData.password
            })
            res.json({user})
            next();
        } else {
            res.send(userData)
        }
    } catch (error) {
        res.json({error: error.message})
    }
}

const Login = async (req, res) => {
    try {
        const {username,password} = req.body;
        const user = await User.findOne({username: username});
        const verify_pass = await bcrypt.compare(password, user.password);
        // console.log(verify_pass);
        if (user && verify_pass) {
            // console.log(user);
            const token = jwt.sign({username, password}, secretKey);
            res.json({token: token});
            return;
        }
        res.status(400).json({"error": "Invalid username"});
    } catch (err) {
        res.status(500).json({error: err.message});
    }
}

export default {Register, Login}