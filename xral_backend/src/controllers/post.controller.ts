import { Request, Response } from 'express'
import { getAllPosts, getPostById } from '../services/post.service'

export async function getPostsHandler(req: Request, res: Response) {
  try {
    const posts = await getAllPosts()
    res.json(posts)
  } catch (error) {
    res.status(500).json({ message: 'Error fetching posts' })
  }
}

export async function getPostHandler(req: Request, res: Response) {
  try {
    const postId = req.params.postId as string  // ✅ FIX

    const post = await getPostById(postId)

    res.json(post)
  } catch (error) {
    res.status(500).json({ message: 'Error fetching post' })
  }
}
