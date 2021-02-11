import styled from 'styled-components'

const ModalStyles = styled.div`
  .ReactModal__Overlay {
    opacity: 0;
    transition: opacity 2000ms ease-in-out;
  }

  .ReactModal__Overlay--after-open {
    opacity: 1;
  }

  .ReactModal__Overlay--before-close {
    opacity: 0;
  }
`

export default ModalStyles
