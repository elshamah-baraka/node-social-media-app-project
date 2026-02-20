import { sanityClient } from '../config/sanityClient'

export const getFeedPosts = async (limit = 10) => {
  const query = `
    *[_type == "post"]
      | order(createdAt desc)[0...$limit] {
        _id,
        content,
        createdAt,
        images,
        author->{
          _id,
          username,
          displayName,
          avatar
        }
      }
  `

  const posts = await sanityClient.fetch(query, { limit })

  // Optional: map to app-friendly shape
  return posts.map((post: any) => ({
    id: post._id,
    content: post.content,
    createdAt: post.createdAt,
    images: post.images,
    author: post.author,
  }))
}
