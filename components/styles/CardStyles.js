import styled from 'styled-components'

// TODO: implement cool transition when card flips
export const AnimationStyles = styled.div`
  position: relative;
  .card {
    display: block;
    position: relative;
    transition: transform 0.4s;
    backface-visibility: hidden;
  }
  .card-enter {
    transform: rotateX(0.5turn);
  }
  .card-enter-active {
    transform: rotateX(0);
  }
  .card-exit {
    /* top: 0; */
    position: absolute;
    transform: rotateX(0);
  }
  .card-exit-active {
    transform: rotateX(0.5turn);
  }
`

export const CardGridStyles = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  margin: 4rem auto;
  background: ${props =>
    props.state ? props.theme.blue : props.theme.offWhite};
  box-shadow: ${props => props.theme.bsh};
  border-radius: 6px;
  border-width: 0;
  color: ${props => (props.state ? props.theme.white : props.theme.altBlack)};
  max-width: 580px;
  justify-self: center;
  .card-heading {
    padding: 1rem 3rem;
    padding-bottom: 0;
    .price {
      font-family: 'Roboto Slab', sans-serif;
      font-size: 7.2rem;
      margin-left: 0;
      margin-right: 1.5rem;
      color: ${props => (props.state ? props.theme.yellow : props.theme.white)};
    }
    .card-subheading {
      font-size: 3.6rem;
    }
  }
  .grid {
    h2 {
      color: white;
    }
    padding: 0 6rem 2rem 6rem;
    display: grid;
    grid-auto-columns: 1fr;
    grid-gap: 1.6rem;
    width: 100%;
    color: white;
    .grid-flex {
      display: flex;
      justify-content: space-between;
      align-items: center;
      &.i-0 {
        display: none;
      }
      &.i-2::after {
        font-size: 1.2rem;
        color: ${props => props.theme.lightGrey};
      }
      .grid-heading {
        font-size: 3.6rem;
        font-family: 'Roboto Slab';
        padding: 0;
        color: ${props =>
          props.state ? props.theme.white : props.theme.altBlack};
      }
      .grid-title {
        font-weight: bold;
        font-size: 1.8rem;
        .grid-subtext {
          font-size: 1rem;
          color: ${props => props.theme.altGrey};
          padding: 0;
        }
      }
      .grid-value::before {
        content: '$';
      }
    }
  }
  .buttons {
    /* background-color: ${props => props.theme.yellow}; */
    bottom: 0;
    margin: auto auto 4rem auto;
    width: 33%;
    flex-shrink: 0;
    /* border-top: 1px solid black; */
    button {
      border-radius: 4px;
      border-width: 0;
      background-color: ${props =>
        props.state ? props.theme.yellow : props.theme.blue};
      color: ${props =>
        props.state ? props.theme.altBlack : props.theme.white};
      width: 100%;
      text-align: center;
      margin: auto auto 0 auto;
      padding: 2rem;
      /* border: 0; */
      font-weight: 600;
      &:hover {
        filter: brightness(0.98);
        color: ${props => props.theme.white};
        cursor: pointer;
      }
    }
  }
`
