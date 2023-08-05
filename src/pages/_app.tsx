import { ContextProvider } from '@/store/context/ContextProvider'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <ContextProvider><Component {...pageProps} /></ContextProvider>
}
