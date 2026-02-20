import sanityClient from '../config/sanityClient'

export async function getPostById(postId: string) {
  const query = `*[_type == "post" && _id == $postId][0]{
    _id,
    title,
    content,
    createdAt,
    author->{
      _id,
      username
    }
  }`

  return await sanityClient.fetch(query, { postId })
}

export async function getAllPosts() {
  const query = `*[_type == "post"] | order(createdAt desc){
    _id,
    title,
    content,
    createdAt,
    author->{
      _id,
      username
    }
  }`

  return await sanityClient.fetch(query)
}
