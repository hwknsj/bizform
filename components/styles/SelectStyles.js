import styled from 'styled-components'

const SelectStyles = styled.div`
  min-width: 800px;
  max-width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  & > * {
    margin: 0 2rem;
  }
  label {
    flex: 0 1 auto;
    font-weight: bold;
    color: ${props => props.theme.altBlack};
  }
  select {
    flex: 0 0.5 200px;
    display: block;
    width: 100%;
    height: 3.8rem;
    padding: 0.8rem 1.2rem;
    font-size: 1.4rem;
    line-height: 1.42857143;
    align-items: middle;
    background-color: ${props => props.theme.white};
    border: 1px solid ${props => props.theme.altBlack};
  }
`

export default SelectStyles
