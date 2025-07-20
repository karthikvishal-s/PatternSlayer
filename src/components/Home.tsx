import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <div>
            <h1>Welcome</h1>
            <p>This is the home page of our React application.</p>
            <p>Click the link below to navigate to the Activity page.</p>

        </div>




      <Link to='/activity'>
      Click to go to Activity
      </Link>
    </div>
  )
}

export default Home
