import HeaderStyles from './styles/HeaderStyles'
import PropTypes from 'prop-types'

const Header = ({ title }) => {
  return (
    <HeaderStyles>
      <h1 className='logo'>
        <a
          href='https://www.wizform.com/'
          target='_blank'
          rel='noopener noreferrer'
        >
          {title || 'WizForm'}
        </a>
      </h1>
      <hr />
    </HeaderStyles>
  )
}

Header.propTypes = {
  title: PropTypes.string
}

export default Header
