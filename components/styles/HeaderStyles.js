import styled from 'styled-components'

const HeaderStyles = styled.header`
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
  border-bottom: 1px solid ${props => props.theme.lightGrey};
  h1.logo {
    font-weight: bold;
    a {
      color: ${props => props.theme.blue};
    }
    a:hover {
      cursor: pointer;
    }
  }
`

export default HeaderStyles
