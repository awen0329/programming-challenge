import React, { useEffect } from 'react'
import { GetServerSideProps } from 'next'
import Link from 'next/link'
import styled from 'styled-components'
import moment from 'moment'

import { Button } from '@styled/button'
import { EM, Title, Summary, PostDate, Content } from '@styled/post'
import { CommentManage } from '@components/post/addCommentForm'
import { usePostContext } from '@context/PostProvider'
import { getPost } from '@services/postService'
import { Post } from '@types'

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  border-radius: 4px;
  padding: 32px;
  min-height: calc(100vh - 120px);
`

const CommentContainer = styled.ul`
  border: 1px solid lightgray;
  border-radius: 5px;
  padding: 20px;
  padding-left: 40px;

  display: flex;
  flex-direction: column;
  gap: 16px;
`

const EditButton = styled(Button)`
  align-self: start;
  height: 40px;
  width: 120px;
  margin-bottom: 1rem;
`

const AddFormCommentContainer = styled.div`
  margin-top: 2rem;
`

export default function PostDetail({ post }: { post: Post }) {
  const { setPost } = usePostContext()

  useEffect(() => {
    setPost(post)
  }, [post, setPost])

  return (
    <PostContainer>
      <EditButton>
        <Link href='/post/edit'>Edit</Link>
      </EditButton>
      <EM>Title</EM>
      <Title>{post.title}</Title>
      <EM>Summary</EM>
      <Summary>{post.summary}</Summary>
      <EM>Content</EM>
      <Content>{post.content}</Content>
      <EM>Date</EM>
      <PostDate>{moment(post.date).format('YYYY-MM-DD')}</PostDate>

      <CommentContainer>
        {post.comments.map((comment: string, index) => (
          <li key={index}>{comment}</li> // key should be unique for each comment and will be replaced by comment id in real database.
        ))}
      </CommentContainer>

      <AddFormCommentContainer>
        <CommentManage post={post} />
      </AddFormCommentContainer>
    </PostContainer>
  )
}

export const getServerSideProps: GetServerSideProps<{ post: Post }> = async (context) => {
  const { post_id } = context.query

  const post = await getPost(post_id as string)

  return { props: { post } }
}
