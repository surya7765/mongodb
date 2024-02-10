// CRUD operations for user
import express from "express";
import User from "../models/users.js";
import AuthController from "../controller/AuthController.js";
import UserController from "../controller/UserController.js";
import authMiddleware from "../middlewares/authMiddleware.js";
const user_router = express.Router();

// Route to `get` all users `only for admin users`
user_router.get("/", authMiddleware, UserController.getAllUser);
// Route to `get` user based on the ID
user_router.get("/:username", authMiddleware, UserController.getSingleUser);
// Route to `create` a new user based on the existing user
user_router.post("/register", AuthController.Register);
user_router.post("/login", AuthController.Login);
// Route to `update or create` the user
user_router.put("/update_profile/:id", );

// Route to `update` the story
// user_router.patch("/update_story/:id", (req, res) => {});

// Route to 'Delete' a user
user_router.delete("/delete/:username", authMiddleware, async (req, res) => {
    // console.log(req.params.username);
    try {
        const user = await User.findOneAndDelete({username:req.params.username});
        console.log(user);
        if(user){
            res.status(200).json({"success":"User deleted successfully!"});
        } else {
            res.status(404).json({"error":"User not found"})
        }
    } catch (error) {
        res.status(404).json({"error":error.message});
    }
    
});

export default user_router;