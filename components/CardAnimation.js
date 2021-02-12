import { CSSTransition, TransitionGroup } from 'react-transition-group'

import { AnimationStyles } from './styles/CardStyles'
import InfoCard from './InfoCard'
import PropTypes from 'prop-types'

const Card = ({ selectedState, selectRef }) => {
  return (
    <AnimationStyles>
      <TransitionGroup>
        <CSSTransition
          unmountOnExit
          className='card'
          classNames='card'
          key={() => selectedState}
          timeout={{ enter: 400, exit: 400 }}
        >
          <InfoCard selectedState={selectedState} selectRef={selectRef} />
        </CSSTransition>
      </TransitionGroup>
    </AnimationStyles>
  )
}

Card.propTypes = {
  selectedState: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  selectRef: PropTypes.object.isRequired
}

export default Card
