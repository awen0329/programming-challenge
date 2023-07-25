import { PostContent } from '@types'

export const getPost = (post_id: string) => {
  return fetch(`${process.env.SERVER_URL}/api/post?post_id=${post_id}`).then((res) => res.json())
}

export const getAllPosts = () => {
  return fetch(`${process.env.SERVER_URL}/api/posts`).then((res) => res.json())
}

export const addPost = (post: PostContent) => {
  return fetch(`${process.env.CLIENT_URL}/api/post`, {
    method: 'POST',
    body: JSON.stringify(post),
  })
}

export const updatePost = (id: string, post: Partial<PostContent>) => {
  return fetch(`${process.env.CLIENT_URL}/api/post`, {
    method: 'PUT',
    body: JSON.stringify({ id: id, post: post }),
  })
}
