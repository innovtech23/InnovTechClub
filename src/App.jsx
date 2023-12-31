import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import { useEffect } from 'react'
import AOS from 'aos'

import Home from './pages/Home'
import SoftwareCell from './pages/SoftwareCell'
import DataCell from './pages/DataCell'
import Architecture from './pages/Architecture'
import Voting from './pages/Voting'
import Terms from './pages/Terms'
import Apply from './pages/Apply'

function App() {
  
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease',
    });
  }, []);

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/terms' element={<Terms />} />
        <Route path='/apply' element={<Apply />} />
        <Route path='/voting' element={<Voting />} />
        <Route path='/architecture' element={<Architecture />} />
        <Route path='/software' element={<SoftwareCell />} />
        <Route path='/data' element={<DataCell />} />
        <Route path='*' element={<Navigate to={'/'} replace />} />
      </Routes>
    </>
  )
}

export default App
