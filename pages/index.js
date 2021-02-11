import React, { Fragment, useEffect, useState, useRef, useMemo } from 'react'

import PropTypes from 'prop-types'
import Select from '../components/Select'
import Card from '../components/CardAnimation'

const Home = ({ data }) => {
  const [
    selectedState,
    setSelectedState
  ] = useState('')

  const selectRef = useRef(null)

  return (
    <Fragment>
      <Select data={data} setSelectedState={setSelectedState} selectRef={selectRef} />
      <Card selectedState={selectedState} selectRef={selectRef} />
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
export const getStaticProps = async () => {
  const res = await fetch(endpoint, { method: 'GET' })
  const data = await res.json()
  return { props: { data } }
}

export default Home
