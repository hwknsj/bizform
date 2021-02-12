import styled from 'styled-components'

const FooterStyles = styled.footer`
  flex-shrink: 0;
  min-height: 300px;
  width: 100%;
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.blue};
  display: flex;
  justify-content: flex-start;
  .footer-content {
    flex: 0 1 auto;
    margin: 0 auto;
    padding: 2rem;
    align-self: center;
    .footer-grid {
      flex: 0;
      display: grid;
      grid-auto-columns: 1fr auto;
      p {
        font-family: 'Lato', sans-serif;
        font-weight: 'light';
        font-style: italic;
      }
      .footer-flex {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-self: flex-end;
        justify-content: space-between;
        width: 100%;
        span {
          font-family: 'Roboto Slab';
          line-height: ${({ theme }) => theme.lineHeight * 1.4};
          &.left {
            font-weight: bold;
          }
          a {
            font-family: 'Roboto Slab';
            color: ${({ theme }) => theme.yellow};
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
          <p>A demo by joél hawkins torres</p>
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
              <a href='https://' target='_blank' rel='noopener noreferrer'>
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
