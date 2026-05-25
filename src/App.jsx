import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import { LoadingScreen } from './components/LoadingScreen'
import "./index.css"
import { Navbar } from './components/Navbar'
import { MobileMenu } from './components/MobileMenu'
import { Home } from './components/sections/Home'
import { About } from './components/sections/About'
import { Projects } from './components/sections/Projects'
import { RelevantExperience } from './components/sections/RelevantExperience'
import { Contact } from './components/sections/Contact'
import { ProjectDetail } from './pages/ProjectDetail'
import { WorkDetail } from './pages/WorkDetail'

function PortfolioHome() {
  const [isLoaded, setIsLoaded] = useState(() => !!sessionStorage.getItem("hasVisited"))
  const [menuOpen, setMenuOpen] = useState(false)

  const handleLoadComplete = () => {
    sessionStorage.setItem("hasVisited", "1")
    setIsLoaded(true)
  }

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={handleLoadComplete} />}
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Home />
      <Projects />
      <RelevantExperience />
      <About />
      <Contact />
    </>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<PortfolioHome />} />
      <Route path="/projects/:id" element={<ProjectDetail />} />
      <Route path="/work/:id" element={<WorkDetail />} />
    </Routes>
  )
}

export default App
