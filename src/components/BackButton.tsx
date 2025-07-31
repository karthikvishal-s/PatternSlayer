
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

const BackButton = () => {
  return (
    <div>
      
   
        <Link to="/">
        <ArrowLeft className='inline mr-2' />
        </Link>
     
    </div>
  )
}

export default BackButton
