import './App.css'
import { Navbar } from './components/navbar/Navbar'
import { Login } from './components/login/Login'
import { Signup } from './components/signup/Signup'
import { Route, Routes } from 'react-router-dom'
import { Home } from './components/home/Home'
import { Explore } from './components/explore/Explore'
import { Kids } from './components/kids/Kids'
import { Mindblown } from './components/mindblown/Mindblown'
import { Premium } from './components/premium/Premium'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/explore' element={<Explore/>}></Route>
        <Route path='/kids' element={<Kids/>}></Route>
        <Route path='/mindblown' element={<Mindblown/>}></Route>
        <Route path='/premium' element={<Premium/>}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
      </Routes>
      {/* <Login /> */}
      {/* <Signup /> */}
    </div>
  )
}

export default App
