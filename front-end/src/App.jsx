import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import './App.css'
import Home from './Component/Home'
import MyProfile from './Component/MyProfile'
import Settings from './Component/Settings'
import Login from './Component/Login'
import Signup from './Component/SignUp'
import Statistics from './Component/Statistics'
import Leaderboard from './Component/Leaderboard'

function App() {

  return (
    <>
    <Routes>
      <Route path='/'
      element={<Home/>}/>
      <Route path='/login'
      element={<Login/>}/>
    </Routes>
    </>
  )
}

export default App
