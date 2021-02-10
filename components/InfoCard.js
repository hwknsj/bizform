import { CardGridStyles } from './styles/CardStyles'
import Modal from 'react-modal'
import PropTypes from 'prop-types'
import { useState } from 'react'

Modal.setAppElement('#__next')

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '60vw',
    maxHeight: '80vh',
    overflow: 'scroll',
    padding: '0'
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  }
}

const InfoCard = ({ state }) => {
  const [modalIsOpen, setModalOpen] = useState(false)

  const openModal = () => {
    setModalOpen(true)
  }
  const closeModal = () => {
    setModalOpen(false)
  }

  if (!state) {
    return (
      <CardGridStyles state={false}>
        <div className='card-heading'>
          <span className='price'>$0</span>
          <span className='card-subheading'>due today</span>
        </div>
        <div className='grid'>
          <div className='grid-flex'>
            <div className='grid-heading'>
              Get help starting your own LLC, C-Corp, or registering as a Sole
              Proprieter. <br /> <small>Select your state above.</small>
            </div>
          </div>
        </div>
      </CardGridStyles>
    )
  }

  return (
    <CardGridStyles state={true}>
      <div className='card-heading'>
        <span className='price'>$0</span>
        <span className='card-subheading'>due today</span>
      </div>
      <div className='grid'>
        <div className='grid-flex'>
          {/* eslint-disable-next-line dot-notation */}
          <div className='grid-heading'>Fee Breakdown in {state['State']}</div>
        </div>
        {/* eslint-disable-next-line array-bracket-spacing */}
        {Object.entries(state).map(([key, value], index) => {
          if (key.startsWith('DBA')) {
            const regex = /(?<title>\S*)\s{1}(?<subtitle>.*)/
            const { groups } = key.match(regex) || key
            return (
              <div className={`grid-flex i-${index}`} key={key}>
                <span className='grid-title'>
                  {groups.title}:
                  <div className='grid-subtext'>{groups.subtitle}</div>
                </span>{' '}
                <span className='grid-value'>{value}</span>
              </div>
            )
          }
          if (key.startsWith('Name')) {
            const title = key.split(' ').slice(0, 2).join(' ')
            const subtitle = key.split(' ').pop()
            return (
              <div className={`grid-flex i-${index}`} key={key}>
                <span className='grid-title'>
                  {title}:<div className='grid-subtext'>{subtitle}</div>
                </span>{' '}
                <span className='grid-value'>{value}</span>
              </div>
            )
          }
          return (
            <div className={`grid-flex i-${index}`} key={key}>
              <span className='grid-title'>{key}:</span>{' '}
              <span className='grid-value'>{value}</span>
            </div>
          )
        })}
      </div>
      <div className='buttons'>
        <button type='button' onClick={openModal}>
          More info
        </button>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel='test modal'
        style={customStyles}
      >
        <CardGridStyles
          state={false}
          style={{ margin: 0, padding: '4rem 6rem' }}
        >
          <h3 className='serif alt-black'>
            Hey there, we are busy building the best possible experience for
            you. Please check back in March 2021 for our official launch.
          </h3>
          <h4 className='alt-black'>
            Check out the{' '}
            <a
              href='https://www.wizform.com/'
              className='blue'
              target='_blank'
              rel='noopener noreferrer'
            >
              official website
            </a>{' '}
            to stay up-to-date with our launch.
          </h4>
          <div className='buttons'>
            <button onClick={closeModal}>Close</button>
          </div>
        </CardGridStyles>
      </Modal>
    </CardGridStyles>
  )
}

InfoCard.propTypes = {
  // state: PropTypes.object.isRequired
  state: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired
}

export default InfoCard
