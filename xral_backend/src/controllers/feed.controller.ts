import { Request, Response } from 'express'
import { getFeedPosts } from '../services/feed.service'

export const getFeed = async (req: Request, res: Response) => {
  try {
    const limit = Number(req.query.limit) || 10
    const posts = await getFeedPosts(limit)
    res.status(200).json(posts)
  } catch (error) {
    console.error('Feed error:', error)
    res.status(500).json({ message: 'Failed to fetch feed' })
  }
}
