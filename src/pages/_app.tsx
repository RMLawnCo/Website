import Layout from '@/components/Layout'
import '@fortawesome/fontawesome-svg-core/styles.css'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
