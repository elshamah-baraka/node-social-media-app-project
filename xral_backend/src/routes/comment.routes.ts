import { Router } from 'express'
import { createCommentHandler, getCommentsHandler } from '../controllers/comment.controller'

const router = Router()

router.post('/', createCommentHandler)
router.get('/:postId', getCommentsHandler)

export default router
