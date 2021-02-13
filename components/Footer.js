import styled from 'styled-components'

const FooterStyles = styled.footer`
  margin-top: 0;
  padding-top: 0;
  flex-shrink: 0;
  width: 100%;
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.blue};
  display: flex;
  justify-content: center;
  .footer-content {
    display: grid;
    grid-template-columns: 1fr;
    flex-grow: 1;
    margin: 0 auto;
    width: ${({ theme }) => theme.cardWidth};
    padding: 4rem;
    align-self: center;
    justify-content: center;
    .footer-grid {
      margin: 0 auto;
      max-width: ${({ theme }) => theme.cardWidth};
      display: grid;
      grid-auto-columns: 1fr auto;
      h3 {
        font-family: 'Lato', sans-serif;
        font-weight: 'light';
        font-style: italic;
        color: ${({ theme }) => theme.yellow};
      }
      .footer-flex {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-items: space-between;
        span {
          font-family: 'Roboto Slab';
          line-height: ${({ theme }) => theme.lineHeight * 1.4};
          &.left {
            font-weight: bold;
            margin-right: 2rem;
          }
          &.right {
            margin-left: auto;
            a {
              font-family: 'Roboto Slab';
              color: ${({ theme }) => theme.yellow};
            }
          }
        }
      }
    }
  }
`

const Footer = () => {
  return (
    <FooterStyles>
      <div className='footer-content'>
        <div className='footer-grid'>
          <h3>A demo by joél hawkins torres</h3>
        </div>
        <div className='footer-grid'>
          <div className='footer-flex'>
            <span className='left'>www/</span>{' '}
            <span className='right'>
              <a
                href='https://joel.fm'
                target='_blank'
                rel='noopener noreferrer'
              >
                https://joel.fm
              </a>
            </span>
          </div>
          <div className='footer-flex'>
            <span className='left'>git/</span>{' '}
            <span className='right'>
              <a
                href='https://github.com/hwknsj'
                target='_blank'
                rel='noopener noreferrer'
              >
                @hwknsj
              </a>
            </span>
          </div>
          <div className='footer-flex'>
            <span className='left'>in/</span>{' '}
            <span className='right'>
              <a
                href='https://www.linkedin.com/in/hwwknsj'
                target='_blank'
                rel='noopener noreferrer'
              >
                @hwknsj
              </a>
            </span>
          </div>
        </div>
      </div>
    </FooterStyles>
  )
}
export default Footer
