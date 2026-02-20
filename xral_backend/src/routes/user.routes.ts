import { Router } from 'express'
import { getUsersHandler, getUserHandler } from '../controllers/user.controller'

const router = Router()

router.get('/', getUsersHandler)
router.get('/:userId', getUserHandler)

export default router
