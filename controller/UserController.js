import User from '../models/users.js'

const getAllUser = async (req, res) => {
    // console.log(req.query.sort);
    try {
        const users = await User.find({}).sort(req.query.sort).limit(req.query.limit);
        if (users.length > 0) {
            res.status(200).json({ users: users });
            return
        }
        res.status(404).json({erro: "There's no User" });
    } catch (error) {
        res.status(500).json({ error: "Error while fetching the User" });
    }
}

const getSingleUser =  async (req, res) => {
    try {
        const user = await User.findById({ _id: req.params.id });
        if (user) {
            res.status(200).json({ user: user });
        } else {
            res.status(404).json({ error: "404 user Not Found" });
        }
    } catch (error) {
        res.status(500).json({ error: "Error while fetching the data" });
    }
}

export default {getAllUser, getSingleUser}