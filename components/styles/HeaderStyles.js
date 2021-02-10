import styled from 'styled-components'

const HeaderStyles = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin: 0 auto;
  width: 100%;
  border-bottom: 1px solid ${props => props.theme.lightGrey};
  h1.logo {
    font-weight: bold;
    font-size: 6.4rem;
    margin: 2rem auto;
    a {
      color: ${props => props.theme.blue};
    }
    a:hover {
      cursor: pointer;
    }
  }
`

export default HeaderStyles
