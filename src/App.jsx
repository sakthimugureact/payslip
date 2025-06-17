import React from 'react'
import Login from './Pages/Login'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './Pages/Home'
import Payroll from './Pages/Payroll'
import Payslip from './Pages/Payslip'

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/payroll' element={<Payroll/>}></Route>
      <Route path='/payslip' element={<Payslip/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App