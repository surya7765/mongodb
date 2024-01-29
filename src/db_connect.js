import Story from '../models/posts.js'


// const story = Story({
//     title: "Welcome to MongoDB",
//     body: "Lets go for this",
// })

// await story.save();

const story = await Story.find({})
console.log(story);