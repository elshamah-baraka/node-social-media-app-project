import sanityClient from '../config/sanityClient'

interface CreateCommentInput {
  postId: string
  userId: string
  text: string
}

export async function createComment({
  postId,
  userId,
  text
}: CreateCommentInput) {
  return await sanityClient.create({
    _type: 'comment',
    post: {
      _type: 'reference',
      _ref: postId
    },
    author: {
      _type: 'reference',
      _ref: userId
    },
    text,
    createdAt: new Date().toISOString()
  })
}

export async function getCommentsByPost(postId: string) {
  const query = `*[_type == "comment" && post._ref == $postId]{
    _id,
    text,
    createdAt,
    author->{
      _id,
      username
    }
  }`

  return await sanityClient.fetch(query, { postId })
}
