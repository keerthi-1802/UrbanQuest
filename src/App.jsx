import React from 'react'
import Hero from './components/hero'
import AboutSection from './components/about'
import ProblemSection from './components/problemsection'
import DoSomethingNow from './components/somethingNew'
import QuestWorlds from './components/questWorld'
import LifeDashboard from './components/dashboard'
import AlphaLaunch from './components/alphaLaunch'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <div>
      <ScrollToTop />
      <Hero/>
      <AboutSection/>
      <ProblemSection/>
      <QuestWorlds/>
      <DoSomethingNow/>
      <LifeDashboard/>
      <AlphaLaunch/>
    </div>
  )
}

export default App