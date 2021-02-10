import React, { Fragment, useEffect, useState, useRef } from 'react'

import InfoCard from '../components/InfoCard'
import PropTypes from 'prop-types'
import Select from '../components/Select'

const Home = ({ data }) => {
  const [
    states,
    setStates
  ] = useState([])
  const [
    selectedState,
    setSelectedState
  ] = useState('')
  const selectRef = useRef(null)

  useEffect(
    () => {
      if (data) {
        setStates(data)
      }
    },
    [
      data
    ]
  )

  const handleChange = ({ target: { value } }) => {
    setSelectedState(JSON.parse(value))
  }

  return (
    <Fragment>
      {states && (
        <Select
          states={states}
          selectedState={selectedState}
          selectRef={selectRef}
          handleChange={handleChange}
        />
      )}
      <InfoCard state={selectedState} selectRef={selectRef} />
    </Fragment>
  )
}

Home.propTypes = {
  data: PropTypes.array.isRequired
}

const endpoint =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000/api/states'
    : process.env.API_ENDPOINT

// Get api data
export const getServerSideProps = async () => {
  const res = await fetch(endpoint, { method: 'GET' })
  const data = await res.json()
  return { props: { data } }
}

export default Home
