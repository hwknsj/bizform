import { GlobalStyle, InnerStyle, StyledPage, theme } from './styles/Theme'

import Footer from './Footer'
import Head from 'next/head'
import Header from './Header'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'

const Page = ({ children, location }) => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>WizForm | Uncomplicated Company Creation</title>
      </Head>
      <GlobalStyle />
      <StyledPage>
        <Header title={location} />
        <InnerStyle>{children}</InnerStyle>
        <Footer />
      </StyledPage>
    </ThemeProvider>
  )
}

Page.propTypes = {
  children: PropTypes.object.isRequired,
  location: PropTypes.string
}

export default Page
