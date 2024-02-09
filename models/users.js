import {Schema, model} from "mongoose";
import bcrypt from 'bcrypt';

const user = new Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        min: [13, "Age below 13 is not allowed"]
    },
    email: {
        type: String,
        unique: true
    },
    password:{
        type: String,
        required: true
    }
})
// Mongoose Hooks
// Before saving the document to the database
// It's going to hash the password
// Implementation like a middleware
user.pre('save', async function(next){
    const saltRounds = this.username.length || 10
    const salt = await bcrypt.genSalt(saltRounds);
    // console.log(salt);
    const hash = await bcrypt.hash(this.password, salt)
    this.password = hash;
    next();
})

const User = model('User', user);
export default User;