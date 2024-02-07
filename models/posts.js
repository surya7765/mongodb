import {Schema, model} from "mongoose";
// import User from "./users.js";

const story = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    body: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
        // type: Schema.Types.ObjectId,
        // ref: 'User'
    },
    created_at: {
        type: Date
    },
    published: {
        type: Boolean
    },
})

const Story = model('Story', story);
export default Story;