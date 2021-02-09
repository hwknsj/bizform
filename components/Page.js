import { GlobalStyle, InnerStyle, StyledPage, theme } from './styles/Theme'

import Header from './Header'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'

const Page = ({ children, location }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <StyledPage>
        <Header title={location} />
        <InnerStyle>{children}</InnerStyle>
      </StyledPage>
    </ThemeProvider>
  )
}

Page.propTypes = {
  children: PropTypes.object.isRequired
}

export default Page
