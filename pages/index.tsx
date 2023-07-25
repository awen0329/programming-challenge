import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import styled from 'styled-components'

import { PostCard } from '@components/post/postCard'
import { getAllPosts } from '@services/postService'
import { Button } from '@styled/button'
import { Post } from '@types'

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const AddButton = styled(Button)`
  align-self: start;
  height: 40px;
  width: 120px;
`

const PostsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
`

export default function Page({ posts }: { posts: Post[] }) {
  const router = useRouter()

  useEffect(() => {
    router.replace(router.asPath)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <PageContainer>
      <AddButton>
        <Link href='/post/add'>Add a Post</Link>
      </AddButton>
      <PostsContainer>
        {posts.map((e, i) => (
          <PostCard key={i} post={e} />
        ))}
      </PostsContainer>
    </PageContainer>
  )
}

export async function getStaticProps() {
  const posts: Post[] = await getAllPosts()

  return { props: { posts: posts.sort((a, b) => (a.date > b.date ? -1 : 1)) } }
}
