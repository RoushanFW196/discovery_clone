import './App.css'
import { Navbar } from './components/navbar/Navbar'
import { Login } from './components/login/Login'
import { Signup } from './components/signup/Signup'
import { Route, Routes } from 'react-router-dom'
import { Home } from './components/home/Home'
import { Explore } from './components/explore/Explore'
import { Kids } from './components/kids/Kids'
import  Mindblown  from './components/mindblown/Mindblown'
import  Footer  from './components/footer/Footer'
import  Premium  from './components/premium/Premium'
import { Details } from './components/videoDetails/Details'
import { Payment } from './components/payment/Payment'
import { Shorts } from './components/shorts/Shorts'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/explore' element={<Explore/>}></Route>
        <Route path='/kids' element={<Kids/>}></Route>
        <Route path="/shorts" element={<Shorts/>}></Route>
        <Route path='/mindblown' element={<Mindblown/>}></Route>
        <Route path='/premium' element={<Premium/>}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/details' element={<Details />}></Route>
        <Route path='/payment' element={<Payment />}></Route>
      </Routes>
      {/* <Footer /> */}
      {/* <Shorts /> */}
    </div>
  )
}

export default App
