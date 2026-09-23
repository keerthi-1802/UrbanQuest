import React from 'react'
import Hero from './components/hero'
import AboutSection from './components/about'
import ProblemSection from './components/problemsection'
import DoSomethingNow from './components/somethingNew'
import QuestWorlds from './components/questWorld'
import LifeDashboard from './components/dashboard'
import AlphaLaunch from './components/alphaLaunch'
import ScrollToTop from './components/ScrollToTop'
import Navbar from './components/navbar'



function App() {
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <Hero />
      <ProblemSection />
      <AboutSection />
      <QuestWorlds />
      <DoSomethingNow />
      <LifeDashboard />
      <AlphaLaunch />
    </div>
  )
}

export default App