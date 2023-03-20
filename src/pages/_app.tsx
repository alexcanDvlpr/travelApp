import '@/styles/globals.css'
import { Auth0Provider } from '@auth0/auth0-react'
import { ChakraProvider } from '@chakra-ui/react'
import { NextPage } from 'next';
import type { AppProps } from 'next/app'
import { ReactElement, ReactNode } from 'react';

const DOMAIN = process.env.NEXT_PUBLIC_AUTH0_DOMAIN ?? "";
const CLIENT_ID = process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID ?? "";
const REDIRECT_URL = process.env.NEXT_PUBLIC_AUTH0_REDIRECT_URI ?? "";

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)
  return (
    <ChakraProvider>
      <Auth0Provider
        domain={DOMAIN}
        clientId={CLIENT_ID}
        authorizationParams={{
          redirect_uri: REDIRECT_URL
        }}
      >
        {
          getLayout(
            <Component {...pageProps} />
          )
        }
      </Auth0Provider>
    </ChakraProvider>
  )
}

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}