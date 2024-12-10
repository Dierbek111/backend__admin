import { Route, Routes } from 'react-router-dom'
import s from './App.module.scss'
import React from 'react'
import Home from './pages/Home'
import AdminPage from './pages/AdminPage'

const App = () => {
  return (
    <>
      <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/admin' element={<AdminPage/>}></Route>
      </Routes>
    </>
  )
}

export default App