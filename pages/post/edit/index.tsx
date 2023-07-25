import React from 'react'
import { AddEditPostForm } from '@components/post/addEditPostForm'
import { usePostContext } from '@context/PostProvider'

export default function EditPost() {
  const postContext = usePostContext()

  return <AddEditPostForm post={postContext.post} />
}
