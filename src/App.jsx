
import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './pages/Footer'

function App() {

  return (
    <>
       <Navbar/>
      <Outlet/>
      <Footer/>    

    </>
  )
}

export default App