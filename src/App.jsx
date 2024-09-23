import { useState } from 'react'

import './App.css'
import ParalaxBackground from './components/paralaxBg/ParalaxBackground'
import Footer from './layout_components/Footer'
import Main from './layout_components/MainContent.jsx' 
import Header from './layout_components/Header'
import NavList from './layout_components/NavList'

function App() {
  const [count, setCount] = useState(0)

  return (
      <ParalaxBackground>
        <Header/>
        <NavList/>
        <Main />
        <Footer/>
      </ParalaxBackground>
  )
}

export default App
