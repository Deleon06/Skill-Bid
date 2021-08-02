import { Router } from "express"
import { signUp, login, verify } from "../controllers/user.js"

const router = Router()

router.post("/sign-up", signUp) // CREATE
router.post("/login", login) //CREATE
router.get("/verify", verify) // READ
// router.put("/update-info", updateInfo) // UPDATE
// router.delete("/users/:id", deleteUser) //DELETE

export default router