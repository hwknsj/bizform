import PropTypes from 'prop-types'
import SelectStyles from './styles/SelectStyles'

const Select = ({ states, selectedState, handleChange, selectRef }) => {
  return (
    <SelectStyles>
      {states && (
      <><label htmlFor='states'>Select your state</label>
          <select name='states' id='states' className='inline' ref={selectRef} onChange={e => handleChange(e)} defaultValue={''}>
          <option disabled value={''} >
            {' '}
            -- select an option --{' '}
          </option>
          {states.map(state => (
            <option key={state['State']} value={JSON.stringify(state)}>
              {state['State']}
            </option>
          ))}
        </select></>
      )}
    </SelectStyles>
  )
}

Select.propTypes = {
  states: PropTypes.array.isRequired
}
export default Select
