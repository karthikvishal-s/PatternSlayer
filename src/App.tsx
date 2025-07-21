import './App.css'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './components/Home.tsx';
import Activity from './components/Activity.tsx';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='activity' element={<Activity/>} />
        
      </Routes>
    </Router>
  )
}

export default App

