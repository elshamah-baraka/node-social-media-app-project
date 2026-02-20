import { Request, Response } from 'express'
import { getAllUsers, getUserById } from '../services/user.service'

export async function getUsersHandler(req: Request, res: Response) {
  try {
    const users = await getAllUsers()
    res.json(users)
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users' })
  }
}

export async function getUserHandler(req: Request, res: Response) {
  try {
    const userId = req.params.userId as string  // ✅ FIX

    const user = await getUserById(userId)

    res.json(user)
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user' })
  }
}
