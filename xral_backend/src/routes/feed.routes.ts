import { Router } from 'express'
import { getFeed } from '../controllers/feed.controller'

const router = Router()

router.get('/feed', getFeed)

export default router
