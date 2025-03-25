import { useState } from 'react'
import './App.css'
import SignUp from './pages/SignUp'
import LogIn from './pages/LogIn'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<SignUp/>}/>
          <Route path='/logIn' element={<LogIn/>}/>
        </Routes>
      </Router>
     
    </>
  )
}

export default App
