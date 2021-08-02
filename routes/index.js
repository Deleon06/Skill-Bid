import { Router } from 'express';
import usersRoutes from './user.js'
import postsRoutes from './post.js'

const router = Router();

router.get("/", (req, res) =>
  res.send("This is api route"));

  router.use("/", usersRoutes)
  router.use("/", postsRoutes)

export default router;