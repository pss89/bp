// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import constants from './constants'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Main from './components/Main';
import Intro from './components/Intro';
import Career from './components/Career';
import Projects from './components/Projects';
import Project from './components/Project';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EmptyPage from './components/EmptyPage';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Navbar navbarItems={constants.navbarItems}/>
        <Routes>
          <Route path="/bp" element={<Main/>} />
          <Route path="/bp/intro" element={<Intro/>} />
          <Route path="/bp/career" element={<Career/>} />
          <Route path="/bp/projects" element={<Projects/>} />
          <Route path="/bp/project/first" element={<Project type="first"/>} />
          <Route path="/bp/project/seconde" element={<Project type="seconde"/>} />
          <Route path="/bp/project/third" element={<Project type="third"/>} />
          <Route path="*" element={<EmptyPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
