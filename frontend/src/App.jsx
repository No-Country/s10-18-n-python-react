import {Routes, Route} from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import LandingPage from './components/LandingPage'

function App() {

  return (
    <>
      <Routes>
        <Route path={'/'} element={<LandingPage />} />
        <Route path={'/login'} element={<Login />} />
      </Routes>
    </>
  )
}

export default App
