import express from 'express'
import controllers from '../controllers/posts'
import verifyauth from '../middlewares/verifyauth'
const router = express.Router()

router.get('/posts', controllers.getAllPosts)
router.get('/followers-post', verifyauth ,controllers.followersPost)
router.get('/post/:id',controllers.postbyID)
router.post('/new-post', verifyauth, controllers.addPost)
router.post('/edit-post/:id', verifyauth, controllers.editPost)
