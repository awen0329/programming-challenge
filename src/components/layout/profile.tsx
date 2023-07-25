import { useCallback } from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'
import styled from 'styled-components'

import { LightButton } from '@styled/button'

const LoginButton = styled(LightButton)`
  height: 48px;
  width: 120px;
  align-self: end;
`

const WelcomeUser = styled.em`
  font-size: 0.8rem;
  color: #444341;
`

export const Profile = () => {
  const { data: session } = useSession()

  const onLogin = useCallback(() => {
    if (session) {
      signOut()
    } else {
      signIn()
    }
  }, [session])

  return (
    <>
      <LoginButton onClick={onLogin}>{session ? 'Signout' : 'Login'}</LoginButton>
      {session && <WelcomeUser>Welcome {session.user?.email}</WelcomeUser>}
    </>
  )
}
