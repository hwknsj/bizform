import styled from 'styled-components'

const SelectStyles = styled.div`
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  & > * {
    margin: 0 2rem;
  }
  label {
    flex: 0 1 auto;
    font-weight: bold;
    color: ${props => props.theme.altBlack};
    line-break: strict;
    white-space: nowrap;
  }
  select,
  .select {
    flex: 0 0.5 200px;
    display: block;
    height: 3.8rem;
    padding: 0.8rem 1.2rem;
    font-size: 1.4rem;
    line-height: 1.42857143;
    align-items: middle;
    background-color: ${props => props.theme.white};
    border: 1px solid ${props => props.theme.altBlack};
  }
  @media screen and (max-width: ${({ theme }) => theme.maxWidthSm}) {
    label {
      margin-bottom: 1rem;
    }
  }
`

export default SelectStyles
