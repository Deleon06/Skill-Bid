import { Router } from 'express';
import { signUp, signIn, verify } from '../controllers/users.js';


const router = Router();

//sign up: POST
router.post('/sign-up', signUp)
//sign in: POST
router.post('/sign-in', signIn)
//Verify: GET
router.get('/verify', verify)
//Change Password: POST
// router.post('/change-password')

export default router;
