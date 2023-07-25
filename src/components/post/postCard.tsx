import React from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import moment from 'moment'

import { EM, Title, Summary, PostDate, PostContainer } from '@styled/post'
import { Post } from '@types'

export const PostCard = ({ post }: { post: Post }) => {
  const router = useRouter()

  return (
    <PostContainer onClick={() => router.push(`/post/view/${post.id}`)}>
      <EM>Title</EM>
      <Title>{post.title}</Title>
      <EM>Summary</EM>
      <Summary>{post.summary}</Summary>
      <EM>Date</EM>
      <PostDate>{moment(post.date).format('YYYY-MM-DD')}</PostDate>
    </PostContainer>
  )
}
