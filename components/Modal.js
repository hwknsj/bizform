import { CardGridStyles } from './styles/CardStyles'
import Modal from 'react-modal'
import ModalStyles from './styles/ModalStyles'

Modal.setAppElement('#__next')

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '80vw',
    maxHeight: '80vh',
    overflowY: 'scroll',
    padding: '0'
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  }
}

const renderModal = ({ modalIsOpen, closeModal }) => {
  return (
    <ModalStyles>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel='Launching March 2021!'
        style={customStyles}
      >
        <CardGridStyles
          state={false}
          style={{ margin: 0, maxWidth: 'inherit' }}
          className='p2'
        >
          <h3 className='serif alt-black'>
            <span className='bold'>Hold on!</span> We're just as excited as you
            are to get started–look forward to March 2021 for our official
            launch. Right now we're working hard building the best possible
            experience for you so that you can begin building your own business.
            Subscribe to our mailing list so you can be the first to know.
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
    </ModalStyles>
  )
}

export { renderModal as default }
