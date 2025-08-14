
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

//Routing is done using Link tag....

const BackButton = () => {
  return (
    <div>

        <Link to="/">
        <ArrowLeft className='inline mr-2 text-white' />
        </Link>
     
    </div>
  )
}

export default BackButton
