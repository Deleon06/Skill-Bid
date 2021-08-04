import { Router } from "express";
import restrict from "../helpers/restrict.js";
import { getAllPosts, createPost, getPost, updatePost, deletePost, getBathroom, getCeiling, getElectrical, getFloor, getKitchen, getLandscape, getPaint, getPlumbing, getRoof, getWall } from "../controllers/posts.js";

const router = Router();
// get all posts
router.get("/posts", getAllPosts);
router.get("/posts/bathroom", getBathroom);
router.get("/posts/ceiling", getCeiling);
router.get("/posts/electrical", getElectrical);
router.get("/posts/floor", getFloor);
router.get("/posts/kitchen", getKitchen);
router.get("/posts/landscape", getLandscape);
router.get("/posts/paint", getPaint);
router.get("/posts/plumbing", getPlumbing);
router.get("/posts/roof", getRoof);
router.get("/posts/wall", getWall);

// get id post
router.get("/posts/:id", getPost);
// create a post
router.post("/posts", restrict, createPost);
// update post
router.put("/posts/:id", restrict, updatePost);
// delete post
router.delete("/posts/:id", restrict, deletePost);

export default router;