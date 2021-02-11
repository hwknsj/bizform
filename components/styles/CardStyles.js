import styled from 'styled-components'

export const AnimationStyles = styled.div`
  position: relative;
  .card {
    display: block;
    position: relative;
    transition: transform 0.4s;
    backface-visibility: hidden;
    font-feature-settings: 'tnum';
    font-variant-numeric: tabular-nums;
  }
  .card-enter {
    transform: rotateY(0.5turn);
  }
  .card-enter-active {
    transform: rotateY(0);
  }
  .card-exit {
    top: 0;
    position: absolute;
    transform: rotateY(0);
  }
  .card-exit-active {
    transform: rotateY(0.5turn);
  }
`

export const CardGridStyles = styled.div`
  transition: transform 0.4s;
  backface-visibility: hidden;
  line-height: ${({ theme }) => theme.lineHeight * 2};
  color: white;
  display: flex;
  flex-direction: column;
  margin: 4rem auto;
  background: ${props => (props.state ? props.theme.blue : props.theme.offWhite)};
  box-shadow: ${props => props.theme.bsh};
  border-radius: 2px;
  border-width: 0;
  color: ${props => (props.state ? props.theme.white : props.theme.altBlack)};
  width: ${({ theme }) => theme.cardWidth};
  justify-self: center;
  align-self: stretch;
  height: 100%;
  flex: 1;
  .card-heading {
    padding: 1rem 3rem;
    padding-bottom: 0;
    margin-bottom: 2rem;
    .price {
      font-family: 'Roboto Slab', sans-serif;
      font-size: 7.2rem;
      margin-left: 0;
      margin-right: 1.5rem;
      color: ${props => (props.state ? props.theme.yellow : props.theme.blue)};
    }
    .card-subheading {
      font-size: 3.6rem;
    }
    @media (max-width: ${({ theme }) => theme.maxWidthXs}) {
      padding: 1rem 2rem;
      line-height: 1.42;
      .price {
        font-size: 5.6rem;
      }
    }
    @media (max-width: ${({ theme }) => theme.maxWidthSm}) {
      line-height: 1.42;
      .price {
        font-size: 6.4rem;
      }
    }
  }
  @media screen and (max-width: ${({ theme }) => theme.maxWidthXs}) {
    max-width: 95vw;
  }
  @media screen and (max-width: ${({ theme }) => theme.maxWidthSm}) {
    max-width: 90vw;
  }
  .grid {
    h2 {
      color: white;
    }
    display: grid;
    grid-auto-columns: 1fr;
    grid-gap: 1.6rem;
    width: 100%;
    color: white;
    padding: 0 6rem 2rem 6rem;
    .grid-flex {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .grid-heading {
        font-size: 3.6rem;
        font-family: 'Roboto Slab';
        padding: 0;
        margin: 0 -2rem;
        color: ${props => (props.state ? props.theme.white : props.theme.altBlack)};
        @media (max-width: ${({ theme }) => theme.maxWidthSm}) {
          line-height: 1.42;
        }
        small {
          font-family: 'Lato', sans-serif;
          color: ${({ theme }) => theme.altGrey};
        }
      }
      .grid-title {
        font-weight: bold;
        font-size: 1.8rem;
        .grid-subtext {
          margin-top: -1rem;
          font-size: 1.4rem;
          font-style: italic;
          color: ${props => props.theme.altGrey};
          padding: 0;
        }
      }
      .grid-value::before {
        content: '$';
      }
    }
    @media (max-width: ${({ theme }) => theme.maxWidthXs}) {
      padding: 0 2rem 2rem 2rem;
    }
    @media (max-width: ${({ theme }) => theme.maxWidthSm}) {
      padding: 0 4rem 2rem 4rem;
    }
  }
  .buttons {
    bottom: 0;
    margin: auto auto 4rem auto;
    flex-shrink: 0;
    flex-basis: auto;
    align-self: flex-end;
    white-space: nowrap;
    button {
      border-radius: 4px;
      border-width: 0;
      background-color: ${props => (props.state ? props.theme.yellow : props.theme.blue)};
      color: ${props => (props.state ? props.theme.altBlack : props.theme.white)};
      text-align: center;
      margin: auto auto 0 auto;
      padding: 2rem 4rem;
      font-size: 1.8rem;
      font-weight: 600;
      &:hover {
        filter: brightness(0.98);
        color: ${props => props.theme.white};
        cursor: pointer;
      }
    }
  }
`
