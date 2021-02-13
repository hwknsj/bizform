import { Fragment, useCallback, useEffect, useState } from 'react'

import PropTypes from 'prop-types'
import SelectStyles from './styles/SelectStyles'

const RenderSelect = ({ children, onChange, selectRef }) => (
  <Fragment>
    <label htmlFor='states'>Select your state</label>
    <select
      name='states'
      id='states'
      className='inline'
      onChange={e => onChange(e.target.value)}
      defaultValue={''}
      ref={selectRef}
    >
      <option disabled value={''}>
        {' '}
        -- select an option --{' '}
      </option>
      {children}
    </select>
  </Fragment>
)

const Select = ({ data, setSelectedState, selectRef }) => {
  const [states, setStates] = useState([])

  useEffect(() => {
    setStates(data)
  }, [data])

  const renderOptions = useCallback(
    () =>
      states.map(state => (
        <option key={state.State} value={JSON.stringify(state)}>
          {state.State}
        </option>
      )),
    [states]
  )

  const handleChange = value => setSelectedState(() => JSON.parse(value))

  return (
    <SelectStyles>
      <RenderSelect
        className='select'
        onChange={handleChange}
        selectRef={selectRef}
      >
        {renderOptions()}
      </RenderSelect>
    </SelectStyles>
  )
}

Select.propTypes = {
  data: PropTypes.array,
  setSelectedState: PropTypes.func.isRequired,
  selectRef: PropTypes.object.isRequired
}

RenderSelect.propTypes = {
  children: PropTypes.array,
  onChange: PropTypes.func.isRequired,
  selectRef: PropTypes.object.isRequired
}

export default Select
