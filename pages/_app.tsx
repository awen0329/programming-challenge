import React from 'react'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'

import Layout from '@components/layout'
import { PostProvider } from '@context/PostProvider'
import SocketProvider from '@utils/socket'
import '../styles/globals.css'

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <>
        <SocketProvider />
        <Layout>
          <PostProvider>
            <Component {...pageProps} />
          </PostProvider>
        </Layout>
      </>
    </SessionProvider>
  )
}
