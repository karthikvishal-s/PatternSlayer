import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <div>
            <h1>Hello</h1>
        </div>




      <Link to='/activity'>
      Click to go to Activity
      </Link>
    </div>
  )
}

export default Home
