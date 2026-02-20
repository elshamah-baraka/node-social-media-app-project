import express from 'express'
import commentRoutes from './routes/comment.routes'
import postRoutes from './routes/post.routes'
import userRoutes from './routes/user.routes'

const app = express()

app.use(express.json())

app.use('/api/comments', commentRoutes)
app.use('/api/posts', postRoutes)
app.use('/api/users', userRoutes)

export default app
