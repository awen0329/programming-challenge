import { createContext, useContext, useState } from 'react'

import { PostContextType, Post } from '@types'

const defaultValues: PostContextType = {
  post: {
    id: '',
    title: '',
    summary: '',
    content: '',
    date: new Date(),
    comments: [],
  },
  setPost: (post: Post) => {},
}

const PostContext = createContext<PostContextType>(defaultValues)

export function PostProvider({ children }: { children: React.ReactNode }) {
  const [post, setPost] = useState(defaultValues.post)

  const value = {
    post,
    setPost,
  }

  return <PostContext.Provider value={value}>{children}</PostContext.Provider>
}

export function usePostContext() {
  if (!PostContext) {
    throw new Error('Context is not provided.')
  }

  return useContext(PostContext)
}
