import './App.css'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './components/Home.tsx';
import Activity from './components/Activity.tsx';
import LearnMore from './components/LearnMore.tsx';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='activity' element={<Activity/>} />
        <Route path='learnMore' element={<LearnMore/>} />
        
      </Routes>
    </Router>
  )
}

export default App

