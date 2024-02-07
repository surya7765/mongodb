import express from "express";
const router = express.Router();
import Story from "../models/posts.js";


// Route to `get` all stories posted by users
router.get("/", async (req, res) => {
    // console.log(req.query.sort);
    try {
        const stories = await Story.find({}).sort(req.query.sort).limit(req.query.limit);
        if (stories.length > 0) {
            res.status(200).json({ stories: stories });
            return
        }
        res.status(404).json({erro: "There's no Story" });
    } catch (error) {
        res.status(500).json({ error: "Error while fetching the data" });
    }
});

// Route to `get` story based on the ID
router.get("/:id", async (req, res) => {
    try {
        const story = await Story.findById({ _id: req.params.id });
        if (story) {
            res.status(200).json({ story: story });
        } else {
            res.status(404).json({ error: "404 Story Not Found" });
        }
    } catch (error) {
        res.status(500).json({ error: "Error while fetching the data" });
    }
});

// Route to `create` a new story
router.post("/create", async (req, res) => {
  try {
    const create_story = await Story.create({
      title: req.body.title,
      body: req.body.body,
      author: req.body.author,
      created_at: Date.now(),
      published: false,
    });
    res.json({ created: create_story });
  } catch (error) {
    res.status(500).json({ error: "Error while creating Data" });
  }
});

// Route to `update or create` the story
router.put("/update/:id", async (req, res) => {
  const story = await Story.findByIdAndUpdate(
    {
      _id: req.params.id,
    },
    req.body
  );
  res.send("story updated successfully!");
});

// Route to `update` the story
// router.patch("/update_story/:id", (req, res) => {});

// Route to 'Delete' a story
router.delete("/delete/:id", async (req, res) => {
    await Story.findByIdAndDelete(req.params.id);
    res.send("Story deleted");
});

router.all("*", (req, res, next) => {
  res.send("No page found");
  next();
});

export default router;
