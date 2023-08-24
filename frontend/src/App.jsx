import { useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Profile from './components/Profile'

function App() {
  const [count, setCount] = useState(0)
  const a = "a"
  return (
    <>
      <Navbar />
      <Profile />
      <Footer />
    </>
  )
}

export default App
