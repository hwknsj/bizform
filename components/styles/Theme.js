import styled, { createGlobalStyle } from 'styled-components'

export const theme = {
  red: '#FF0000',
  blue: '#1643f0',
  black: '#393939',
  altBlack: '#333',
  grey: '#3A3A3A',
  altGrey: '#b3afaf',
  white: '#ffffff',
  lightGrey: '#E1E1E1',
  offWhite: '#EDEDED',
  yellow: '#f0b84c',
  maxWidth: '1200px',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
  bsh: '0 12px 24px 0 rgba(0, 0, 0, 0.2)'
}

export const StyledPage = styled.div`
  background: white;
  color: ${props => props.theme.black};
  .container {
    align-items: stretch;
    max-width: var(--maxWidth);
    margin: 0 auto;
    padding: 4rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    /* grid-template-columns: 1fr auto; */
    justify-content: center;
    /* text-align: center; */
  }
`

export const InnerStyle = styled.div`
  max-width: ${props => props.theme.maxWidth};
  width: 100%;
  margin: 0 auto;
  padding: 4rem;
  display: grid;
  /* grid-template-columns: repeat(2, minmax(1fr, auto)); */
  /* grid-template-columns: 1fr auto; */
  justify-content: center;
  align-items: stretch;
  /* text-align: center; */
`

export const GlobalStyle = createGlobalStyle`
  /* latin-ext */
@font-face {
  font-family: 'Lato';
  font-style: italic;
  font-weight: 400;
  font-display: swap;
  src: url('https://fonts.gstatic.com/s/lato/v17/S6u8w4BMUTPHjxsAUi-qNiXg7eU0.woff2') format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Lato';
  font-style: italic;
  font-weight: 400;
  font-display: swap;
  src: url('https://fonts.gstatic.com/s/lato/v17/S6u8w4BMUTPHjxsAXC-qNiXg7Q.woff2') format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* latin-ext */
@font-face {
  font-family: 'Lato';
  font-style: italic;
  font-weight: 700;
  font-display: swap;
  src: url('https://fonts.gstatic.com/s/lato/v17/S6u_w4BMUTPHjxsI5wq_FQftx9897sxZ.woff2') format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Lato';
  font-style: italic;
  font-weight: 700;
  font-display: swap;
  src: url('https://fonts.gstatic.com/s/lato/v17/S6u_w4BMUTPHjxsI5wq_Gwftx9897g.woff2') format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* latin-ext */
@font-face {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('https://fonts.gstatic.com/s/lato/v17/S6uyw4BMUTPHjxAwXiWtFCfQ7A.woff2') format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('https://fonts.gstatic.com/s/lato/v17/S6uyw4BMUTPHjx4wXiWtFCc.woff2') format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* latin-ext */
@font-face {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url('https://fonts.gstatic.com/s/lato/v17/S6u9w4BMUTPHh6UVSwaPGQ3q5d0N7w.woff2') format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url('https://fonts.gstatic.com/s/lato/v17/S6u9w4BMUTPHh6UVSwiPGQ3q5d0.woff2') format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

/* cyrillic-ext */
@font-face {
  font-family: 'Roboto Slab';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('https://fonts.gstatic.com/s/robotoslab/v13/BngbUXZYTXPIvIBgJJSb6s3BzlRRfKOFbvjojISmYmRlV9Su1caiTVo.woff') format('woff');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Roboto Slab';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('https://fonts.gstatic.com/s/robotoslab/v13/BngbUXZYTXPIvIBgJJSb6s3BzlRRfKOFbvjojISma2RlV9Su1caiTVo.woff') format('woff');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek-ext */
@font-face {
  font-family: 'Roboto Slab';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('https://fonts.gstatic.com/s/robotoslab/v13/BngbUXZYTXPIvIBgJJSb6s3BzlRRfKOFbvjojISmY2RlV9Su1caiTVo.woff') format('woff');
  unicode-range: U+1F00-1FFF;
}
/* greek */
@font-face {
  font-family: 'Roboto Slab';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('https://fonts.gstatic.com/s/robotoslab/v13/BngbUXZYTXPIvIBgJJSb6s3BzlRRfKOFbvjojISmbGRlV9Su1caiTVo.woff') format('woff');
  unicode-range: U+0370-03FF;
}
/* vietnamese */
@font-face {
  font-family: 'Roboto Slab';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('https://fonts.gstatic.com/s/robotoslab/v13/BngbUXZYTXPIvIBgJJSb6s3BzlRRfKOFbvjojISmYGRlV9Su1caiTVo.woff') format('woff');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Roboto Slab';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('https://fonts.gstatic.com/s/robotoslab/v13/BngbUXZYTXPIvIBgJJSb6s3BzlRRfKOFbvjojISmYWRlV9Su1caiTVo.woff') format('woff');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Roboto Slab';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('https://fonts.gstatic.com/s/robotoslab/v13/BngbUXZYTXPIvIBgJJSb6s3BzlRRfKOFbvjojISmb2RlV9Su1cai.woff') format('woff');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}


  html {
    box-sizing: border-box;
    font-size: 10px;
    padding: 0;
    margin: 0;
  }
  *, *:before, *:after {
    box-sizing: inherit
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.6rem;
    line-height: 2;
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
`
