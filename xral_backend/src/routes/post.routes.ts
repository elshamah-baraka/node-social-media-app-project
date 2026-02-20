import { Router } from 'express'
import { getPostsHandler, getPostHandler } from '../controllers/post.controller'

const router = Router()

router.get('/', getPostsHandler)
router.get('/:postId', getPostHandler)

export default router
