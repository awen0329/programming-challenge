import { ReactNode } from 'react'
import Link from 'next/link'
import styled from 'styled-components'

import { Profile } from '@components/layout/profile'

const Main = styled.main``

const Header = styled.header`
  background-color: #f29845;
  color: white;
  height: 100px;
  padding: 10px;
  font-weight: 600;
  font-size: x-large;
`

const HeaderContainer = styled.div`
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  padding: 16px;
`

const Container = styled.section`
  padding: 32px;
  max-width: 1200px;
  margin: 32px auto;
  background-color: #f4ede7;
  border-radius: 5px;
`

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <Main>
      <Header>
        <HeaderContainer>
          <Link href={'/'}>Posts</Link>
          <ProfileContainer>
            <Profile />
          </ProfileContainer>
        </HeaderContainer>
      </Header>
      <Container>{children}</Container>
    </Main>
  )
}
