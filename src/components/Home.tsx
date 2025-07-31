import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <div>
            <h1 className='text-4xl'>Hello </h1>
       </div>




     

      <img src="/4kids.jpg" alt="Placeholder" className='mt-4' />

      <div className='flex flex-col items-center justify-center mt-4'>
      <Link to='/activity' className='text-center block mt-4 text-center bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors w-40'>
      <h1 className='border'>Start Game</h1>
      </Link> 
      </div>

    </div>
  )
}

export default Home
