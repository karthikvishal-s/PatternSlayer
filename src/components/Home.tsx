import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <Link to='/activity'>
      Click to go to Activity
      </Link>
    </div>
  )
}

export default Home
