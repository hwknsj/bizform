import React, { Fragment, useEffect, useState } from 'react'

import InfoCard from '../components/InfoCard'
import PropTypes from 'prop-types'
import Select from '../components/Select'

const Home = ({ data }) => {
  const [states, setStates] = useState([])
  const [selectedState, setSelectedState] = useState('')

  useEffect(() => {
    if (data) {
      setStates(data)
    }
  }, [data])

  const handleChange = ({ target: { value } }) => {
    setSelectedState(JSON.parse(value))
  }

  return (
    <Fragment>
      {states && (
        <Select
          states={states}
          selectedState={selectedState}
          handleChange={handleChange}
        />
      )}
      <InfoCard state={selectedState} />
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
