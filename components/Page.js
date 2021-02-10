import { GlobalStyle, InnerStyle, StyledPage, theme } from './styles/Theme'

import Header from './Header'
import PropTypes from 'prop-types'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import Footer from './Footer'

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
  children: PropTypes.object.isRequired
}

export default Page
