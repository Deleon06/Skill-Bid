import { Router } from "express";
import restrict from "../helpers/restrict.js";
import { getAllPosts, createPost, getPost } from "../controllers/todos.js";

const router = Router();
// get all posts
router.get("/posts", getAllPosts);
// get id post
router.get("/posts/:id", getPost);
// create a post
router.post("/posts", restrict, createPost);
// update post
// router.put("/posts/:id", restrict, updatePost);
// delete post
// router.delete("/posts/:id", restrict, deletePost);

export default router;