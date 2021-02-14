import React, { useRef, useState } from 'react'

import Card from '../components/CardAnimation'
import PropTypes from 'prop-types'
import Select from '../components/Select'

const Home = ({ data }) => {
  const [selectedState, setSelectedState] = useState('')

  const selectRef = useRef(null)

  return (
    <>
      <Select
        data={data}
        setSelectedState={setSelectedState}
        selectRef={selectRef}
      />
      <Card selectedState={selectedState} selectRef={selectRef} />
    </>
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
export const getStaticProps = async () => {
  const res = await fetch(endpoint, { method: 'GET' })
  const data = await res.json()
  return { props: { data } }
}

export default Home
