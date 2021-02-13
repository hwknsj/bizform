import styled from 'styled-components'

const HeaderStyles = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  height: 125px;
  max-height: 125px;
  padding: 0;
  border-bottom: 1px solid ${props => props.theme.lightGrey};
  .logo-image {
    width: 100%;
    margin: 0 8rem;
    padding: 0;
    align-items: center;
    max-width: 500px;
    max-height: 125px;
  }
  @media (max-width: ${({ theme }) => theme.maxWidthSm}) {
    justify-content: center;
    align-content: center;
    align-items: center;
    margin: 0 auto;
    text-align: center;
    .logo-image {
      max-width: 80vw;
      height: 100%;
      justify-self: center;
      margin: 2rem auto;
      transform: translateY(2rem);
      img {
        align-self: center !important;
      }
    }
  }
  h1.logo {
    font-weight: bold;
    font-size: 6.4rem;
    /* margin: 2rem auto; */
    a {
      color: ${props => props.theme.blue};
    }
    a:hover {
      cursor: pointer;
    }
  }
`

export default HeaderStyles
