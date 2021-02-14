import 'normalize.css'

import * as gtag from '../lib/gtag'

import GoogleTagManager from '../components/GoogleTagManager'
import Page from '../components/Page'
import PropTypes from 'prop-types'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = url => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
  return (
    <GoogleTagManager>
      <Page>
        <Component {...pageProps} />
      </Page>
    </GoogleTagManager>
  )
}

MyApp.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object
}

export default MyApp
