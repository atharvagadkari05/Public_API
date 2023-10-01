import express from "express";
import controller from '../controllers/auth.js'
import verifyauth from '../middlewares/verifyauth.js'
const router = express.Router();


router.post('/register', controller.register )
router.post('/login',controller.login)
router.get('/user',verifyauth, controller.user)

export default router