import HeaderStyles from './styles/HeaderStyles'
import Image from 'next/image'
import PropTypes from 'prop-types'

const Header = ({ title }) => {
  return (
    <HeaderStyles>
      <div className='logo-image'>
        <Image
          src='/bizform-logo.svg'
          alt='BizForm Logo'
          title='BizForm Logo'
          width={1500}
          height={380}
          layout='responsive'
          objectFit='cover'
          objectPosition='center'
        />
      </div>
      <hr />
    </HeaderStyles>
  )
}

Header.propTypes = {
  title: PropTypes.string
}

export default Header
