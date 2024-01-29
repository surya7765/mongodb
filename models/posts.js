import {Schema, model} from "mongoose";

const story = new Schema({
    title: {
        type: "string",
        required: true
    },
    body: {
        type: "string",
        required: true
    },
    author: {
        type: "string",
        required: true
    },
    created_at: {
        type: Date
    },
    published: {
        type: Boolean
    }
})

const Story = model('Story', story);
export default Story;