import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import Home from './pages/Home'
import Services from './pages/Services'
import ContactUs from './pages/ContactUs'
import AboutUs from './pages/AboutUs'

function App() {

  return (
    <>
      <BrowserRouter>
        <HeaderComponent></HeaderComponent>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/services' element={<Services></Services>}></Route>
          <Route path='/contact' element={<ContactUs></ContactUs>} ></Route>
          <Route path='/about' element={<AboutUs></AboutUs>}></Route>
        </Routes>
        <FooterComponent></FooterComponent>
      </BrowserRouter>
    </>
  )
}

export default App
