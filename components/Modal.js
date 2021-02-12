import ModalStyles, { ModalStylesObject } from './styles/ModalStyles'

import { CardGridStyles } from './styles/CardStyles'
import Modal from 'react-modal'
import PropTypes from 'prop-types'

Modal.setAppElement('body')

const renderModal = ({ modalIsOpen, closeModal }) => {
  return (
    <ModalStyles>
      <Modal
        // closeTimeoutMS={400}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel='Launching March 2021!'
        style={{ ...ModalStylesObject }}
      >
        <CardGridStyles
          state={false}
          style={{ margin: 0, maxWidth: 'inherit' }}
          className='p2'
        >
          <h3 className='serif alt-black'>
            <span className='bold'>Hold on!</span> We&apos;re just as excited as
            you are to get started–look forward to March 2021 for our official
            launch. Right now we&apos;re working hard building the best possible
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

renderModal.propTypes = {
  modalIsOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired
}

export { renderModal as default }
