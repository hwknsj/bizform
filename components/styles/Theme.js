import styled, { createGlobalStyle } from 'styled-components'

import fonts from './Fonts'

export const theme = {
  red: '#FF0000',
  blue: '#1643f0',
  black: '#393939',
  altBlack: '#333',
  grey: '#3A3A3A',
  altGrey: '#b3afaf',
  white: '#ffffff',
  lightGrey: '#E1E1E1',
  offWhite: '#FAFAFA',
  yellow: '#f0b84c',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
  bsh: '2px 12px 24px 0px rgba(0, 0, 0, 0.2)',
  bshBlue: '2px 12px 24px 0px rgba(3, 0, 0, 0.2)',
  maxWidthXs: '422px',
  maxWidthSm: '688px',
  maxWidthMd: '992px',
  maxWidthLg: '1312px',
  maxWidth: '1312px',
  cardWidth: '662px',
  cardHeight: '768px',
  lineHeight: '1'
}

export const StyledPage = styled.div`
  background: white;
  color: ${props => props.theme.black};
  min-height: 100%;
  height: 100%;
  flex: 1 0 auto;
`

export const InnerStyle = styled.div`
  display: grid;
  justify-content: center;
  align-items: stretch;
  grid-template-rows: 1fr auto;
  max-width: ${props => props.theme.maxWidth};
  width: 100%;
  margin: 0 auto;
  padding: 4rem;
  .container {
    align-items: stretch;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-template-rows: 1fr auto;
    max-width: ${theme.maxWidth};
    width: 100%;
    margin: 0 auto;
    padding: 4rem;
    justify-content: center;
    min-height: 100%;
    height: 100%;
    @media (max-width: ${theme.maxWidthSm}) {
      padding: 1rem;
    }
    @media (max-width: ${theme.maxWidthMd}) {
      padding: 2rem;
    }
  }
`

export const GlobalStyle = createGlobalStyle`
  ${fonts()}

  html {
    box-sizing: border-box;
    font-size: 10px;
    padding: 0;
    margin: 0;
    height: 100%;
  }
  *, *:before, *:after {
    box-sizing: inherit
  }
  body {
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 0;
    font-size: 1.6rem;
    font-family: 'Lato', 'Open Sans', sans-serif;
  }
  a {
    text-decoration: none;
    color: ${theme.black};
    font-family: 'Lato', 'Open Sans', sans-serif;
  }
  h1,h2,h3,h4,h5 > * {
    font-family: 'Lato', 'Open Sans', sans-serif;
    color: ${theme.blue};
  }
  input, button, option, select, textarea {
    color: ${theme.altBlack};
    font-family: 'Lato', 'Open Sans', sans-serif;
  }
  /* some helper classes */
  .bold {
    font-weight: bold !important;
  }
  .italic {
    font-style: italic !important;
  }
  .serif {
    font-family: 'Roboto Slab', sans-serif !important;
  }
  .inline {
    display: inline !important;
  }
  .block {
    display: block !important;
  }
  .center-x {
    margin: 0 auto !important;
    text-align: center !important;
  }
  .white {
    color: ${props => props.theme.white} !important;
  }
  .blue {
    color: ${props => props.theme.blue} !important;
  }
  .black {
    color: ${props => props.theme.black} !important;
  }
  .alt-black {
    color: ${props => props.theme.altBlack} !important;
  }
  .line-height {
    line-height: ${({ theme }) => theme.lineHeight * 1.2} !important;
  }
  .p0 {
    padding: 0 !important;
  }
  .p2 {
    padding: 2rem !important;
  }
  .py-1 {
    padding-top: 1rem !important;
    padding-bottom: 1rem !important;
  }
  .px-1 {
    padding-left: 1rem !important;
    padding-right: 1rem !important;
  }
`
