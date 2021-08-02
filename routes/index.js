import { Router } from 'express';

const router = Router();

router.get("/", (req, res) =>
  res.send("This is api route"));

  // router.use("/", usersRoutes)
  // router.use("/", postsRoutes)

export default router;