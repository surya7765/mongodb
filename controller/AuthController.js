import User from '../models/users.js'
import validators from '../validators/user_validators.js'

const Register = async (req,res) => {
    // console.log(req.body);
    try {
        const userData = {...req.body};
        if (validators.validateName(userData.name)) {
            console.log("Hello " + userData.name);
            res.send(userData.name);
        } else {
            res.send(userData)
        }
    } catch (error) {
        res.json({error: error.message})
    }
}

const Login = () => {
    
}

export default {Register, Login}