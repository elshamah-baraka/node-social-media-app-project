import sanityClient from '../config/sanityClient'

export async function getUserById(userId: string) {
  const query = `*[_type == "user" && _id == $userId][0]{
    _id,
    username,
    email,
    bio
  }`

  return await sanityClient.fetch(query, { userId })
}

export async function getAllUsers() {
  const query = `*[_type == "user"]{
    _id,
    username,
    email,
    bio
  }`

  return await sanityClient.fetch(query)
}
