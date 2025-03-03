// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Main from './components/Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EmptyPage from './components/EmptyPage';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/buchet_portfolio" element={<Main/>} />
          <Route path="*" element={<EmptyPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
