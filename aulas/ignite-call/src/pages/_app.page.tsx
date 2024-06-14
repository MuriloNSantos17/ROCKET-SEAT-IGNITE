import { queryClient } from '@/lib/react.query'
import '../lib/dayjs'
import { globalStyles } from '@/styles/global'
import { QueryClientProvider } from '@tanstack/react-query'
import { SessionProvider } from "next-auth/react"
import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'

globalStyles()

export default function
  App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider session={session}>
        <DefaultSeo
          openGraph={{
            type: 'website',
            locale: 'pr_BR',
            url: 'https://ignite-call.murilo.com.br',
            siteName: 'Ingite Call',
          }}         
        />
        <Component {...pageProps} />
      </SessionProvider>
    </QueryClientProvider>
  )
}
