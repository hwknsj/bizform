import React, { useState, useEffect, Fragment } from 'react'
import StateCard from '../components/StateCard'
import PropTypes from 'prop-types'
import Select from '../components/Select'
const endpoint = process.env.API_ENDPOINT || 'http://localhost:3000/api/states'

const Home = ({ data }) => {
  const [
    states,
    setStates
  ] = useState([])
  const [
    selectedState,
    setSelectedState
  ] = useState('')

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
        <Select states={states} selectedState={selectedState} handleChange={handleChange} />
      )}
      <StateCard state={selectedState} />
    </Fragment>
  )
}

Home.propTypes = {
  data: PropTypes.array.isRequired
}

// Get api data
export const getServerSideProps = async () => {
  const res = await fetch(endpoint, { method: 'GET' })
  const data = await res.json()
  return { props: { data } }
}

export default Home
