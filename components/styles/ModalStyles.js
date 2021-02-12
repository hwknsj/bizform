import styled from 'styled-components'

const ModalStyles = styled.dialog`
  .ReactModal__Overlay {
    opacity: 0;
    transition: opacity 200ms ease-in-out;
  }

  .ReactModal__Overlay--after-open {
    opacity: 1;
  }

  .ReactModal__Overlay--before-close {
    opacity: 0;
  }
`

export const ModalStylesObject = {
  '.ReactModal__Overlay': {
    opacity: 0,
    transition: 'opacity 400ms ease-in-out'
  },

  '.ReactModal__Overlay--after-open': {
    opacity: 1
  },

  '.ReactModal__Overlay--before-close': {
    opacity: 0
  },
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
    padding: '0',
    transition: 'opacity 400ms ease-in-out'
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    transition: 'opacity 400ms ease-in-out'
  }
}

export default ModalStyles
