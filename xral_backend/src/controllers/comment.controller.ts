import { Request, Response } from 'express'
import { createComment, getCommentsByPost } from '../services/comment.service'

export async function createCommentHandler(req: Request, res: Response) {
  try {
    const { postId, userId, text } = req.body

    const comment = await createComment({
      postId,
      userId,
      text
    })

    res.status(201).json(comment)
  } catch (error) {
    res.status(500).json({ message: 'Error creating comment' })
  }
}

export async function getCommentsHandler(req: Request, res: Response) {
  try {
    const postId = req.params.postId as string   // ✅ FIX HERE

    const comments = await getCommentsByPost(postId)

    res.json(comments)
  } catch (error) {
    res.status(500).json({ message: 'Error fetching comments' })
  }
}
