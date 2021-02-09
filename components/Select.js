import PropTypes from 'prop-types'
import SelectStyles from './styles/SelectStyles'

const Select = ({ states, selectedState, handleChange }) => {
  return (
    <SelectStyles>
      <label htmlFor='states'>Select your state</label>
      {states && (
        <select name='states' id='states' onChange={e => handleChange(e)}>
          <option disabled selected={!selectedState}>
            {' '}
            -- select an option --{' '}
          </option>
          {states.map(state => (
            <option key={state['State']} value={JSON.stringify(state)}>
              {state['State']}
            </option>
          ))}
        </select>
      )}
    </SelectStyles>
  )
}

Select.propTypes = {
  states: PropTypes.array.isRequired
}
export default Select
