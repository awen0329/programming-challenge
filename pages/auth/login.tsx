import React from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'
import styled from 'styled-components'

const AuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  background-color: lightgray;
  height: 400px;
`

export default function Login() {
  const { data: session } = useSession()

  if (!session) {
    return (
      <AuthContainer>
        <p>Not signed in</p>
        <button onClick={() => signIn()}>Sign in</button>
      </AuthContainer>
    )
  }

  return (
    <AuthContainer>
      <p>{session.user?.email} has joined.</p>
      <button onClick={() => signOut()}>Sign out</button>
    </AuthContainer>
  )
}
