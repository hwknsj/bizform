import { CardGridStyles } from './styles/CardStyles'
import Modal from './Modal'
import PropTypes from 'prop-types'
import { useState } from 'react'

const renderInfoCard = (
  selectedState,
  selectRef,
  openModal,
  closeModal,
  modalIsOpen
) => {
  if (!selectedState) {
    return (
      <CardGridStyles state={false}>
        <div className='card-heading'>
          <span className='price line-height'>
            Making company formation easy
          </span>
        </div>
        <div className='grid'>
          <div className='grid-flex'>
            <div className='grid-heading'>
              Get help starting your own LLC, C-Corp, or registering as a Sole
              Proprieter. <br /> <small>Select your state above.</small>
            </div>
          </div>
        </div>
        <div className='buttons'>
          <button
            type='button'
            onClick={async () => {
              window.scrollTo({
                top: selectRef.current.offsetTop - 20,
                behavior: 'smooth'
              }) && selectRef.current.focus()
            }}
          >
            Find your state
          </button>
        </div>
      </CardGridStyles>
    )
  }

  return (
    <CardGridStyles state={true}>
      <div className='card-heading'>
        <span className='price'>$0</span>
        <span className='card-subheading'>due today</span>
      </div>
      <div className='grid'>
        <div className='grid-flex'>
          {/* eslint-disable-next-line dot-notation */}
          <div className='grid-heading'>
            Fee Breakdown in {selectedState.State}
          </div>
        </div>
        {/* eslint-disable-next-line array-bracket-spacing */}
        {Object.entries(selectedState)
          .slice(1)
          .map(([key, value], index) => {
            if (key.startsWith('DBA')) {
              const regex = /(?<title>\S*)\s{1}(?<subtitle>.*)/
              const { groups } = key.match(regex) || key
              return (
                <div className={`grid-flex i-${index}`} key={key}>
                  <span className='grid-title'>
                    {groups.title}:
                    <div className='grid-subtext'>{groups.subtitle}</div>
                  </span>{' '}
                  <span className='grid-value'>{value}</span>
                </div>
              )
            }
            if (key.startsWith('Name')) {
              const title = key.split(' ').slice(0, 2).join(' ')
              const subtitle = key.split(' ').pop()
              return (
                <div className={`grid-flex i-${index}`} key={key}>
                  <span className='grid-title'>
                    {title}:<div className='grid-subtext'>{subtitle}</div>
                  </span>{' '}
                  <span className='grid-value'>{value}</span>
                </div>
              )
            }
            return (
              <div className={`grid-flex i-${index}`} key={key}>
                <span className='grid-title'>{key}:</span>{' '}
                <span className='grid-value'>{value}</span>
              </div>
            )
          })}
      </div>
      <div className='buttons'>
        <button type='button' onClick={openModal}>
          More info
        </button>
      </div>
      <Modal modalIsOpen={modalIsOpen} closeModal={closeModal} />
    </CardGridStyles>
  )
}

const InfoCard = ({ selectedState, selectRef }) => {
  const [modalIsOpen, setModalOpen] = useState(false)

  const openModal = () => {
    setModalOpen(true)
  }
  const closeModal = () => {
    setModalOpen(false)
  }

  return renderInfoCard(
    selectedState,
    selectRef,
    openModal,
    closeModal,
    modalIsOpen
  )
}

InfoCard.propTypes = {
  selectedState: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  selectRef: PropTypes.object.isRequired
}

export default InfoCard
