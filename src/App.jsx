import './App.css'

import { Outlet } from 'react-router-dom'

import Navbar from './assets/components/Navbar'
import Footer from './assets/components/Footer'

function App() {

  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
