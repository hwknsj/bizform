import 'normalize.css'

import GoogleTagManager from '../components/GoogleTagManager'
import Page from '../components/Page'
import PropTypes from 'prop-types'

function MyApp ({ Component, pageProps }) {
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
