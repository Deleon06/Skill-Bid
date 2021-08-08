import { Router } from "express";
import restrict from "../helpers/restrict.js";
import { getAllPosts, createPost, getPost, updatePost, deletePost, getBathroom, getCeiling, getElectrical, getFloor, getKitchen, getLandscape, getPaint, getPlumbing, getRoof, getWall, getBudgetUnder10000, getBudgetUnder20000, getBudgetUnder30000, getBudgetUnder40000, getBudgetUnder50000, getBudgetUnder60000, getBudgetUnder70000, getBudgetUnder80000, getBudgetUnder90000, getBudgetUnder100000} from "../controllers/posts.js";


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
router.get("/posts/budget10000", getBudgetUnder10000)
router.get("/posts/budget20000", getBudgetUnder20000)
router.get("/posts/budget30000", getBudgetUnder30000)
router.get("/posts/budget40000", getBudgetUnder40000)
router.get("/posts/budget50000", getBudgetUnder50000)
router.get("/posts/budget60000", getBudgetUnder60000)
router.get("/posts/budget70000", getBudgetUnder70000)
router.get("/posts/budget80000", getBudgetUnder80000)
router.get("/posts/budget90000", getBudgetUnder90000)
router.get("/posts/budget100000", getBudgetUnder100000)



// get id post
router.get("/posts/:id", getPost);
// create a post
router.post("/posts", restrict, createPost);
// update post
router.put("/posts/edit/:id", restrict, updatePost);
// delete post
router.delete("/posts/:id", restrict, deletePost);

export default router;