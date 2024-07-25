import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Error from './pages/Error'
import Home from './pages/Home'
import SampleReactJSPage from './pages/SampleReactJSPage'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/home" element={<Home></Home>}></Route>
      <Route path="/sample" element={<SampleReactJSPage></SampleReactJSPage>}></Route>
      <Route path="*" element={<Error></Error>}></Route>
    </Routes>
  )
}

export default App